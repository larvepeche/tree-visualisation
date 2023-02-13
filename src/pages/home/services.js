import { StandardContext, SpelExpressionEvaluator } from "spel2js";
import PageItem from "./pageItem";

export function filterOnCondition(tree, locals) {
  const variables = locals;
  const spelContext = StandardContext.create();
  let compiledExpression;
  return tree.items.filter((item) => {
    if (item.keepIfCondition) {
      try {
        compiledExpression = SpelExpressionEvaluator.compile(
          item.keepIfCondition
        );
        let Pageresult = compiledExpression.eval(spelContext, variables);
        if (!Pageresult) {
          return false;
        }
      } catch (e) {
        console.error(
          "Unable to parse condition or removing item ",
          item.pageId,
          e
        );
      }
    }
    if (item.items) {
      item.items = filterOnCondition(item, locals);
    }
    return true;
  });
}

export function showTree(tree) {
  let result = [];
  tree.forEach((item) => {
    result.push(
      <PageItem key={item.pageId.concat(item.keepIfCondition)} item={item} />
    );
    if (item.items) {
      result = result.concat(showTree(item.items));
    }
  });
  return result;
}
