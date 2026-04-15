// Service layer (API ready)
export const getEmployees = async () => {
  try {
    // 🔴 Future API
    // const res = await fetch("/api/employees");
    // return await res.json();

    return null; // fallback to JSON
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};