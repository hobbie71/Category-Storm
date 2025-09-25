// Context imports
import { useCategories } from "../../../contexts/Categories/useCategories";

// Componet imports
import TextInput from "../../../components/TextInput";

const CategoryInput = () => {
  const { categories, setCategories } = useCategories();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const words = value.split(", ");

    // Set categories to empty array if text is empty
    if (words[0] === "") {
      setCategories([]);
      return;
    }

    setCategories(words);
  };

  const error = categories.length < 5;
  return (
    <div className="flex flex-col items-center text-center">
      <TextInput onChange={handleCategoryChange} error={error} />
      {error && <p className="text-xs text-red-600">5 Categories minimum</p>}
    </div>
  );
};

export default CategoryInput;
