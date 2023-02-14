import { useEffect } from 'react';
import { getAttributeValue } from '../service/utils';
const PageItem = ({ item }) => {
    const { type, title, description, keepIfCondition } = item;

    return (
        <div className={"page " + type}>
            <p className="title">{getAttributeValue(title, true)}</p>

            <p>{getAttributeValue(description, true)}</p>

            {keepIfCondition && <pre>
                <code className="language-javascript">
                    {keepIfCondition}
                </code>
            </pre>}
        </div>
    )
}
export default PageItem;