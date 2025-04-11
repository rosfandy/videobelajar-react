interface StarProps {
    className?: string;
    type: "full" | "half" | "empty";
}

const Star = ({ className, type }: StarProps) => {
    if (type === "half") {
        return (
            <svg className={className} viewBox="0 1 24 24">
                <defs>
                    <linearGradient id="halfGrad">
                        <stop offset="50%" stopColor="#FCE91B" />
                        <stop offset="50%" stopColor="#3A35411F" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#halfGrad)"
                    d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.868 1.548 8.259L12 18.896l-7.484 4.537 1.548-8.259L0 9.306l8.332-1.151z"
                />
            </svg>
        );
    }

    const fill = type === "full" ? "#FCE91B" : "#3A35411F";
    return (
        <svg className={className} viewBox="0 1 24 24">
            <path
                fill={fill}
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.868 1.548 8.259L12 18.896l-7.484 4.537 1.548-8.259L0 9.306l8.332-1.151z"
            />
        </svg>
    );
};

export default Star;
