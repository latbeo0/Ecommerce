import React from "react";
import { Carousel } from "../../Basic";

const ListImage = (props) => {
    const { listImages } = props;

    return (
        <Carousel show={3} infiniteLoop style={{ height: "unset" }}>
            {listImages.map((src, index) => (
                <img
                    key={index}
                    src={src.img}
                    alt={"imgSecondary"}
                    style={{ padding: 0 }}
                />
            ))}
        </Carousel>
    );
};

export default ListImage;
