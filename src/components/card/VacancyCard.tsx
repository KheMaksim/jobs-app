import "./VacancyCard.css";

interface Props {
    image: string;
    title: string;
    subtitle: string;
    description: string;
}

const VacancyCard = ({ image, title, subtitle, description }: Props) => {
    return (
        <div className="vacancy">
            <div className="vacancy__logo">
                <img className="vacancy__image" src={image} alt="image" />
                <div className="vacancy__name">{title}</div>
            </div>

            <div className="vacancy__info">
                <div className="vacancy__title">{subtitle}</div>
                <div className="vacancy__subtitle">{description}</div>
            </div>
        </div>
    );
};

export default VacancyCard;
