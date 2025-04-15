import { useState } from "react";

const Features = () => {
    const [featuresData, setFeaturesData] = useState([
        { id: 1, image: "./assets/images/cat-1.jpg" },
    ]);
    console.log(featuresData)
    const handleAddBox = () => {
        const newId = featuresData.length + 1;
        const newCard = { id: newId, image: "./assets/images/cat-1.jpg" };
        setFeaturesData([...featuresData, newCard]);
    };

    const handleRemove = () => {
        const newData = [...featuresData];
        newData.pop();
        setFeaturesData(newData);
    };

    //deep copy shallow copy

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-5 flex gap-x-4">
                <button
                    onClick={handleAddBox}
                    className="cursor-pointer py-2 p-3 min-w-10 bg-yellow-500 hover:bg-yellow-600 hover:text-white text-xl transition-all duration-300 shadow-2xl rounded-md"
                >
                    Add Card
                </button>
                <button
                    onClick={handleRemove}
                    className="cursor-pointer py-2 p-3 min-w-10 bg-red-500 hover:bg-red-600 hover:text-white text-xl transition-all duration-300 shadow-2xl rounded-md"
                >
                    Remove Card
                </button>
            </div>

            <div className="flex items-center -mx-2 flex-wrap">
                {featuresData.map((item) => (
                    <div key={item.id} className="px-2 mb-4 md:w-1/3 w-full">
                        <div className="p-1 shadow-md rounded-md">
                            <img className="w-full rounded-md" src={item.image} alt="img" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
