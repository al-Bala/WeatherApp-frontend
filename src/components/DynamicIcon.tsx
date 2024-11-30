import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ComponentProps} from "react";
import {
    faCloud, faCloudBolt,
    faCloudMeatball,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun,
    faSmog, faSnowflake,
    faSun
} from "@fortawesome/free-solid-svg-icons";

type IconMapper = {
    [key: number]: ComponentProps<typeof FontAwesomeIcon>['icon'];
};

const iconMapper: IconMapper = {
    0: faSun,
    1: faSun,
    2: faCloudSun,
    3: faCloud,
    45: faSmog,
    48: faSmog,
    51: faCloudRain,
    53: faCloudRain,
    55: faCloudRain,
    56: faCloudMeatball,
    57: faCloudMeatball,
    61: faCloudRain,
    63: faCloudShowersHeavy,
    65: faCloudShowersHeavy,
    66: faCloudMeatball,
    67: faCloudMeatball,
    71: faSnowflake,
    73: faSnowflake,
    75: faSnowflake,
    77: faSnowflake,
    80: faCloudShowersHeavy,
    81: faCloudShowersHeavy,
    82: faCloudShowersHeavy,
    85: faSnowflake,
    86: faSnowflake,
    95: faCloudBolt,
    96: faCloudBolt,
    99: faCloudBolt
};

export const DynamicIcon = ({code}: {code: number}) => {
    const icon = iconMapper[code];

    if (!icon) {
        return <div>-</div>;
    }

    return <FontAwesomeIcon icon={icon} />;
}