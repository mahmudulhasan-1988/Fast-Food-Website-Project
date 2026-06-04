export const getFastFoodData = async () => {
    const res = await fetch("http://localhost:5000/fastFood");
    const data = await res.json();
    return data;
}