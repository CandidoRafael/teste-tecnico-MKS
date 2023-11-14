import { CardDesc } from "../Card/Card.styled";

type TextLimitProps = {
    text: string
    limit: number
}

export const TextLimit = ({text, limit}: TextLimitProps) => {
    const textLimited = 
    text?.length > limit ? `${text.substring(0, limit)}...` : text;

    return <CardDesc>{textLimited}</CardDesc>
}