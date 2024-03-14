// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Add = () => {
  const [formData, setFormData] = useState({
    word: "",
    language: "",
    background: "",
    definition: "",
    example: "",
    tags: "Non-offensive",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://desi-lingo-api.vercel.app/api/add_entries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add slang");
      }
      console.log("Slang added successfully");
    } catch (error) {
      console.error(error);
    } finally {
      setFormData({
        word: "",
        language: "",
        background: "",
        definition: "",
        example: "",
        tags: "Non-offensive",
      });
    }
  };

  return (
    <div className="bg-[#201B79] text-white">
      <div className="container mx-auto px-4 lg:px-20 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Add New Word</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="word" className="block text-lg font-semibold mb-1">
              Word:
            </label>
            <input
              type="text"
              id="word"
              name="word"
              value={formData.word}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 text-[#201B79]"
              placeholder="Enter word"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="language"
              className="block text-lg font-semibold mb-1"
            >
              Language:
            </label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 text-[#201B79]"
              required
            >
              <option value="">Select language</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Other">Other</option>
              <option value="Assamese">Assamese</option>
              <option value="Bengali">Bengali</option>
              <option value="Gujarati">Gujarati</option>
              <option value="Kannada">Kannada</option>
              <option value="Kashmiri">Kashmiri</option>
              <option value="Konkani">Konkani</option>
              <option value="Malayalam">Malayalam</option>
              <option value="Manipuri ">Manipuri</option>
              <option value="Marathi">Marathi</option>
              <option value="Nepali">Nepali</option>
              <option value="Oriya">Oriya</option>
              <option value="Punjabi">Punjabi</option>
              <option value="Sindhi">Sindhi</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Urdu">Urdu</option>
            </select>
            {formData.language === "Other" && (
              <input
                type="text"
                id="otherLanguage"
                name="otherLanguage"
                value={formData.otherLanguage}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 mt-2 text-[#201B79]"
                placeholder="Enter other language"
                required
              />
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="background"
              className="block text-lg font-semibold mb-1"
            >
              Background info:
            </label>
            <input
              type="text"
              id="background"
              name="background"
              value={formData.background}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 text-[#201B79]"
              placeholder="Enter background"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="definition"
              className="block text-lg font-semibold mb-1"
            >
              Excat Definition:
            </label>
            <textarea
              id="definition"
              name="definition"
              value={formData.definition}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 text-[#201B79]"
              placeholder="Enter definition"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="example"
              className="block text-lg font-semibold mb-1"
            >
              Example:
            </label>
            <textarea
              id="example"
              name="example"
              value={formData.example}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 text-[#201B79]"
              placeholder="Enter example"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-lg font-semibold mb-1">
              Tags:
            </label>
            <select
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 text-[#201B79]"
              required
            >
              <option value="Non-offensive">Non-offensive</option>
              <option value="Offensive">Offensive</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-[#201B79] "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
