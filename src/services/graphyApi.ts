import dotenv from "dotenv"
dotenv.config();
export interface GraphyCourse {
    id: string;
    title: string;
    description: string;
    image_url: string;
    duration: string;
    category: string;
    level: string;
    rating: number;
    students_count: string;
    price: number;
    graphy_url: string;
}

export async function fetchGraphyCourses() {
    try {
        const response = await fetch(
            `${process.env.GRAPHY_API_BASE}/courses?mid=${process.env.MERCHANT_ID}&key=${process.env.API_TOKEN}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        if(!response.ok){
            throw new Error(`Graphy API error: ${response.status}`);
        }
        const data = response.json();
        
    } catch (error) {

    }
}