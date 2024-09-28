import React, { useState } from "react";
import { searchUserByPhoneNumber,storage, } from "../Firebse/firebse"; // Assume firebase is initialized here
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Firebase Storage imports
import Button from 'react-bootstrap/Button';
import Downloadpdf from "../Downpdf/Cluddonlaod";

const Maindata = {
  1: "Sanatary pad kit",
  2: "Beauty Parlor Kit",
  3: "Bike Repair And Tire Puncher",
  4: "Youva Svrojgar Yojna"
};
const keys = {
  1: "sanatry",
  2: "beauty",
  3: "Bikerepair",
  4: "yuvasvarojgar"
};

const SearchComponent = () => {
  const [categories] = useState(["Sanatary pad kit", "Beauty Parlor Kit", "Bike Repair And Tire Puncher", "Youva Svrojgar Yojna"]); // Replace with actual categories
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [documents, setDocuments] = useState([]);

  const storage = getStorage(); // Initialize Firebase Storage

  // Handle Category Change
  const handleCategoryChange = (event) => {
    const selectedIndex = event.target.selectedIndex; 
    console.log("Selected index:", selectedIndex);
    setCategory(event.target.value)
    if (selectedIndex >= 0) {
      const selectedCategory = keys[selectedIndex]; 
      console.log("Selected category:", selectedCategory);
      setSelectedCategory(selectedCategory); 
    } else {
      setSelectedCategory(''); 
    }
  };

  // Fetch image URL from Firebase Storage
  const fetchImageUrl = async (imageName) => {
    try {
      const imageRef = ref(storage, `images/${imageName}`); // Path to the image in Firebase Storage
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  };

  // Handle Search
  const handleSearch = async () => {
    if (!selectedCategory || !searchTerm) {
      alert("Please select a category and enter a search term.");
      return;
    }

    const result = await searchUserByPhoneNumber(searchTerm, selectedCategory);
    console.log(result)
    // Fetch image URLs for each document
    const documentsWithImages = await Promise.all(
      result.map(async (doc) => {
        const image1Url = await fetchImageUrl(doc.user_data.imge1);
        const image2Url = await fetchImageUrl(doc.user_data.image2);
        
        return {
          ...doc,
          user_data: {
            ...doc.user_data,
            image1Url,
            image2Url
          }
        };
      })
    );

    setDocuments(documentsWithImages);
  };

  return (
    <div style={{ marginTop: "100px", marginBottom: "200px" }}>
      <div className="srchbar">
        <h2>Search Form here</h2>
        <label htmlFor="category">Select Category: </label>
        <select className="serchbarinput" id="category" value={Category} onChange={handleCategoryChange}>
          <option value="">--Select Category--</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div style={{ width: "100%" }}>
          <input
            className="serchbarinput"
            type="text"
            placeholder="Enter  User Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Search Button */}
          <Button className="btn-primary serchbutton" onClick={handleSearch}>Search</Button>
        </div>
      </div>

      {/* Display Search Results */}
      <div>
        {documents.length > 0 ? (
          <ul>
            {documents.map((doc, index) => (
              <li key={index}>
                <div className="Listdocs">
                  <div>{doc.Username}</div>
                  <div>{doc.user_data.Formname}</div>

                  {/* Display Images */}
                  {/* {doc.user_data.image1Url && (
                    <div>
                      <img src={doc.user_data.image1Url} alt="Image 1" width="200" />
                    </div>
                  )}
                  {doc.user_data.image2Url && (
                    <div>
                      <img src={doc.user_data.image2Url} alt="Image 2" width="200" />
                    </div>
                  )} */}

                  {/* Display PDF Download */}
                  <Downloadpdf
                    userData={doc.user_data.Forminfo}
                    CropeiagmefileSignatur={doc.user_data.image2Url}
                    Cropeiagmefile={doc.user_data.image1Url}
                    ApplicaitonnonType={doc.user_data.Formname} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
