import { useState } from "react";
import { StandardContext, SpelExpressionEvaluator } from 'spel2js';


const Evaluator = () => {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    const spelContext = StandardContext.create();
    const defaultLocals = {
        user: {
            organisationName: "USA",
        },
        nomPack: "PackPremium",
        nomOffrePackEcommerce: "Shopify",
        dynamicPagesVersion: 5,
        isCollectePaiement: false,
        pricing: false,
        isVa: false,
        hasNewDecouverte: false,
        isPricingGoogle: false,
        isAcquisition: false,
        hasFs: false,
        userDisplayFs: false,
        isFsOnly: false,
        offreVerticalisationRestaurantsAvailable: false,
        offreVerticalisationBeauteAvailable: false,
        offreVerticalisationConstructionndOeuvreAvailable: false,
        offreVerticalisationCommerceAvailable: false,
        offreVerticalisationImmobilierAvailable: false,
        offreVerticalisationAutoAvailable: false,
        isTeleventeVD: false,
        offreVerticalisationAvailable: false,
        isAh: false,
        orderHasNewPack: false,
        isSEOBooster: false,
        isEssentiel: false,
        isSEO: false,
        isAdwordPricing: false,
        hasFacebook: false,
        deliverInPack: false,
        clientKnowsNewSolutionsConfigurationPage: false,
        eSignature: false,
    };

    const handleFiltering = () => {
        const compiledExpression = SpelExpressionEvaluator.compile(expression);
        setResult(compiledExpression.eval(spelContext, defaultLocals));
    }
    return (
        <div>
            <textarea value={expression} onChange={(e) => { setExpression(e.target.value) }} /><br />
            <button onClick={handleFiltering}>transform</button>
            <hr />
            <p>result : {result.toString()}</p>
        </div>
    );
}
export default Evaluator; 