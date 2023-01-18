import { useSearchParams } from "react-router-dom";

const Edit = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get("id");
    const mode = searchParams.get("mode")

    console.log(id)
    console.log(mode)

    return <div>
        <h1>Edit</h1>
        <p>이곳은 Edit 입니다.</p>
        <button onClick={() => setSearchParams({ who: "cbh" })}>QS바꾸기</button>
    </div>
}
export default Edit;