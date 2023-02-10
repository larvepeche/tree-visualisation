
import { getAttributeValue } from '../../service/utils';
const PageItem = ({ item }) => {
    const { type, title, description, keepIfCondition } = item;
    return (
        <p className={type}>
            {getAttributeValue(title, true)}
            <br />
            {getAttributeValue(description, true)}
            <br />
            {keepIfCondition && <span>conditions : {keepIfCondition}</span>}
        </p>
    )
}
export default PageItem;