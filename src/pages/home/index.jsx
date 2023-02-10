import { useState } from "react";
import { StandardContext, SpelExpressionEvaluator } from 'spel2js';
import { filterOnCondition, showTree } from './services';
import Split from 'react-split'

const Home = () => {
    const [tree, setTree] = useState("");
    const [result, setResult] = useState("");
    const spelContext = StandardContext.create();
    const [error, setError] = useState("");
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
        try {
            const TreeObject = JSON.parse(tree);
            let filteredTree = filterOnCondition(TreeObject, defaultLocals)
            setResult(showTree(filteredTree));
        } catch (e) {
            alert(e);
        }
    }

    const print = result;
    return (
        <div className="container">
            <Split minSize={400}
                className="split"
                gutterSize={20}
            >
                <div className="split-item">
                    <p>paste tree</p>
                    <button onClick={handleFiltering}>transform</button>
                    <textarea value={tree} onChange={(e) => { setTree(e.target.value) }} />
                </div>
                <div className="split-item">
                    <p>selected pages</p>
                    {print}
                </div>
            </Split>
        </div>
    );
}
export default Home; 