import styled from "styled-components";

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const Container = styled.div`
    padding: 16px;
`;

const Header = styled.h4`
    font-weight: 700;
    color: ${({ color }) => color || "black"};
`;

const Score = styled.div`
color: ${({t}) => t >= 0 ? "black" : "red"};

&::before {
    content: "${({ t }) => t >= 0 ? "$" : "-$"}";
}
`;

const PlayerCard = ({ player, score, updated, color, picture }) => {
    const updatedString = new Intl.DateTimeFormat("en", { timeStyle: "short", dateStyle: "short" }).format(new Date(updated));
    return <Card>
        <Container>
            <img src={picture || "https://picsum.photos/200"} alt={player} style={{ width: "100%" }}></img>
            <Header color={color}>{player}</Header>
            <div>
                <Score t={score}>{Math.abs(score) || "0.00"}</Score>
                <div>
                    Last Updated: {updatedString}
                </div>
            </div>
        </Container>
    </Card >
}

export default PlayerCard;