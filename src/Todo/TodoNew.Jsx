import React from "react";

const ToList = ({ items }) => {
    if (!items || items.length === 0) {
        return <p>Danh sách rỗng!</p>;
    }
    else
        return (
            <ul className="list-disc pl-6">
                {items.map((item, index) => (
                    <li key={index} className="py-1">
                        {item}
                    </li>
                ))}
            </ul>
        );
};
export default ToList;