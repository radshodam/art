import { useSelector, useDispatch } from "react-redux";
import { fetchDataPending } from "../../lib/store/fetchDataSlice";

function TestGetProducts() {
  // Use the useSelector hook to access the 'fetchData' slice of the store
  const { data, loading, error } = useSelector((state) => state.fetchData);
  // Use the useDispatch hook to dispatch the 'fetchData' action
  const dispatch = useDispatch();

  // Handle the button click
  const handleButtonClick = () => {
    dispatch(fetchDataPending());
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
      <button onClick={handleButtonClick}>Fetch Data</button>
    </div>
  );
}
export default TestGetProducts;
