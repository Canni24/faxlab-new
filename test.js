// import dotenv from "dotenv";
// dotenv.config();

// const URL = `https://api.ongraphy.com/public/v1/courses/68ee32b7a3216c6501d95aba?mid=rishabhagarwal&key=${process.env.API_TOKEN}`;

// console.log("Final URL:", URL);

// const res = await fetch(URL);

// const text = await res.text();
// console.log("Response:", text);


async function getCoursesPage() {
  try {
    const res = await fetch("https://faxlab.graphy.com/t/allcourses");

    if (!res.ok) {
      throw new Error("Failed to fetch page");
    }

    const html = await res.text();

    console.log("Page loaded ✅");
    console.log(html.slice(0, 500)); // preview

    // OPTIONAL: extract course links
    const courseLinks = [...html.matchAll(/\/courses\/[a-zA-Z0-9-]+/g)]
      .map(match => "https://faxlab.graphy.com" + match[0]);

    console.log("Courses found:", courseLinks);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

getCoursesPage();