// TODO: Create a script to seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    "Otomobiller ve araçlar",
    "Komedi",
    "Eğitim",
    "Oyun",
    "Eğlence",
    "Film ve animasyon",
    "Nasıl yapılır ve stil",
    "Müzik",
    "Haberler ve politika",
    "İnsanlar ve bloglar",
    "Evcil hayvanlar ve hayvanlar",
    "Bilim ve teknoloji",
    "Spor",
    "Seyahat ve etkinlikler",
];

async function main() {
    console.log("Seeding categories...")

    try {
        const values = categoryNames.map((name) => ({
            name,
            description: `İlgili videolar ${name.toLowerCase()}`
        }));

        await db.insert(categories).values(values);

        console.log("Categores seeded successfully!");
    } catch (error) {
        console.error("Error seeding categories:", error);
        process.exit(1)
    }
}

main();