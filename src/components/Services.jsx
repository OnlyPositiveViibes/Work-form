import services from "../data/services";
import Service from "./Service";

function Services() {
    return services.map(s => <Service key={s.id} value={s.id} title={s.title} />);
}

export default Services;
