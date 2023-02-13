import { useEffect } from 'react';
import { getAttributeValue } from '../../service/utils';
const PageItem = ({ item }) => {
    const { type, title, description, keepIfCondition } = item;

    return (
        <p className={type}>
            {getAttributeValue(title, true)}
            <br />
            {getAttributeValue(description, true)}
            <br />
            <br />
            {keepIfCondition && <pre>
                <code className="language-javascript">
                    {keepIfCondition}
                </code>
            </pre>}
        </p>
    )
}
export default PageItem;