import useWindowDimensions from "../../../hooks/useWindowDimensions";
import SmallNav from "./NavOptions/SmallNav";
import FullNav from "./NavOptions/FullNav";

function MainNavigation() {
    const { width } = useWindowDimensions();
    return width <= 820 ? (<SmallNav/>): (<FullNav/>)
}

export default MainNavigation