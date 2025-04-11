import "@/styles/card.css"
import Star from "../star/Star";

export interface CardInterface {
    title: string,
    description: string,
    thumbnail?: string,
    author?: string,
    authorTitle?: string,
    authorImage?: string,
    authorCompany?: string,
    price?: string,
    rating?: number,
    totalReview?: number,
    prices?: string
}

export const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} className="w-[20px] h-[20px]" type="full" />);
    }
    if (hasHalfStar) {
        stars.push(<Star key="half" type="half" className="w-[20px] h-[20px]" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-${i}`} type="empty" className="w-[20px] h-[20px]" />);
    }

    return <div className="flex items-center gap-1">{stars}</div>;
};


export const Card = (props: CardInterface) => {
    const { title, description, thumbnail, author, authorImage, authorTitle, authorCompany, price, rating = 0, totalReview } = props;

    return (
        <>
            <div className="card">
                <div className="main-container">
                    <img className="thumbnail" src={thumbnail} />
                    <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="author-section">
                            <img src={authorImage} />
                            <div>
                                <div className="author-name">{author}</div>
                                <div className="author-title">
                                    {authorTitle} <span>di <b>{authorCompany}</b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <div className="rating flex items-center">
                        {renderStars(rating)}
                        <span className="underline">{rating} ({totalReview})</span>
                    </div>
                    <div className="price-value">
                        {price}
                    </div>
                </div>
            </div>
        </>
    );
};
