export const presentation = {
  type: "tree",
  category: "presentation",
  items: [
    {
      type: "chapter",
      title:
        "{message:dynamicPages.model.tree.presentation.chapter-linkeo.title:Linkeo}",
      pageId: "chapter-linkeo",
      keepIfCondition: "!(#isCollectePaiement?:false)",
      items: [
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.linkeo-expertise.title:Notre Expertise}",
          description:
            "{message:dynamicPages.model.tree.presentation.linkeo-expertise.description:Une expertise reconnue par de nombreuses certifications.}",
          pageId: "linkeo-expertise",
          keepIfCondition:
            "!(#user?.organisationName == 'Canada') and !(#user?.organisationName == 'USA') and !(#user?.organisationName == 'Australie') ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.linkeo-decouverte.title:Découvrez Linkeo}",
          description:
            "{message:dynamicPages.model.tree.presentation.linkeo-decouverte.description:Leader dans la création de site web et le référencement.}",
          pageId: "linkeo-decouverte",
          keepIfCondition: "!(#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.linkeo-groupe-francais.title:Un groupe Français}",
          description:
            "{message:dynamicPages.model.tree.presentation.linkeo-groupe-francais.description:Un groupe Français présent à l'international.}",
          pageId: "linkeo-groupe-francais",
          keepIfCondition: "!(#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title: "Nos agences",
          description:
            "Découvrez nos agences commerciales présentes dans toute la France.",
          pageId: "carte-agences-france",
          keepIfCondition:
            "!(#user?.organisationName == 'Canada') and !(#user?.organisationName == 'USA') and !(#user?.organisationName == 'Australie') ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.product-and-service.title:Nos produits et services}",
          description:
            "{message:dynamicPages.model.tree.presentation.product-and-service.description:Notre offre est une des plus complète du marché}",
          pageId: "nos-produits-et-services",
        },
      ],
    },
    {
      type: "chapter",
      title:
        "{message:dynamicPages.model.tree.presentation.chapter-client.title:Votre entreprise}",
      pageId: "chapter-client",
      keepIfCondition: "!(#isCollectePaiement?:false)",
      items: [
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-general.title:Informations}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-general.description:Validez et/ou modifiez les informations générales.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (!(#pricing?:false) OR (#isVa?:false))",
          pageId: "client-general",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-general.title:Informations}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-general.description:Validez et/ou modifiez les informations générales.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and !(#isVa?:false)",
          pageId: "client-general-pricing",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-company.title:Entreprise}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-company.description:Renseignez les informations essentielles concernant l'entreprise.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and !(#pricing?:false)",
          pageId: "client-company",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-company.title:Entreprise}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-company.description:Renseignez les informations essentielles concernant l'entreprise.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and !(#hasNewDecouverte?:false) ",
          pageId: "client-company-pricing",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-company.title:Entreprise}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-company.description:Renseignez les informations essentielles concernant l'entreprise.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and (#hasNewDecouverte?:false) ",
          pageId: "client-company-activity-pricing",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-services.page.title:Sélection de vos prestations}",
          description:
            "{message:dynamicPages.model.solutions-pricing-services.page.description:Pour votre référencement naturel (SEO) ou vos campagnes Media (SEA), un choix rigoureux de vos préstations est nécessaire.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and !(#isVa?:false)",
          pageId: "solutions-pricing-services",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-keywords.page.title:Sélection de vos mots clés}",
          description:
            "{message:dynamicPages.model.solutions-pricing-keywords.page.description:Pour votre référencement naturel (SEO) ou vos campagnes Media (SEA), un choix rigoureux de vos mots clés est nécessaire.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and !(#isVa?:false)",
          pageId: "solutions-pricing-keywords",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-keywords.page.title:Sélection de vos mots clés}",
          description:
            "{message:dynamicPages.model.solutions-pricing-keywords.page.description:Pour votre référencement naturel (SEO) ou vos campagnes Media (SEA), un choix rigoureux de vos mots clés est nécessaire.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and !(#isVa?:false)",
          pageId: "seo-pricing-principal-keyword",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-keywords.page.title:Sélection de vos mots clés}",
          description:
            "{message:dynamicPages.model.solutions-pricing-keywords.page.description:Pour votre référencement naturel (SEO) ou vos campagnes Media (SEA), un choix rigoureux de vos mots clés est nécessaire.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and !(#isVa?:false)",
          pageId: "seo-pricing-retained-keywords",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-scope.title:Périmètre d'intervention}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-scope.description:Détaillez la zone d'intervention / de chalandise de l'entreprise.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and !(#pricing?:false)",
          pageId: "client-scope",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-scope.title:Périmètre d'intervention}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-scope.description:Détaillez la zone d'intervention / de chalandise de l'entreprise.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false)",
          pageId: "client-scope-pricing",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-decouverte-theme.title:Découverte}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-decouverte-theme.description:Nous sommes curieux, dîtes-nous tout !}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#hasNewDecouverte?:false)",
          pageId: "client-decouverte-theme",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-clients.title:Clientèle}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-clients.description:Identifiez la clientèle de l'entreprise.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and !(#hasNewDecouverte?:false) ",
          pageId: "client-clients",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-competition.title:Concurrence}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-competition.description:Identifiez la concurrence et les avantages de l'entreprise.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and !(#hasNewDecouverte?:false) ",
          pageId: "client-competition",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-communication.title:Communication}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-communication.description:Décrivez votre communication et votre transformation aujourd'hui.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and !(#hasNewDecouverte?:false) ",
          pageId: "client-communication",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.client-informations-complementaires.title:Informations complémentaires}",
          description:
            "{message:dynamicPages.model.tree.presentation.client-informations-complementaires.description:Renseignez les informations complémentaires concernant l'entreprise.}",
          pageId: "client-informations-complementaires",
          keepIfCondition: "!(#hasNewDecouverte?:false) ",
        },
      ],
    },
    {
      type: "chapter",
      title:
        "{message:dynamicPages.model.tree.presentation.chapter-seo-sem.title:Référencement}",
      pageId: "chapter-seo-sem",
      keepIfCondition: "!(#isCollectePaiement?:false)",
      items: [
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-about-google.title:A propos de Google}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-about-google.description:Découvrez le moteur de recherche incontournable.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (!(#pricing?:false) OR (#isVa?:false))",
          pageId: "seo-sem-about-google",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-about-google.title:A propos de Google}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-about-google.description:Découvrez le moteur de recherche incontournable.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and !(#isVa?:false)",
          pageId: "seo-sem-about-google-pricing",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-presence.title:Votre présence Web}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-presence.description:Testons votre visibilité sur les moteurs de recherche.}",
          pageId: "seo-sem-presence",
          keepIfCondition:
            "(#user?.organisationName == 'Canada') or (#user?.organisationName == 'USA') or (#user?.organisationName == 'Australie')",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-seo.title:SEO Le référencement naturel}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-seo.description:Découvrons ensemble le référencement naturel.}",
          pageId: "seo-ref-nat",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-presence.title:Votre présence Web}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-presence.description:Testons votre visibilité sur les moteurs de recherche.}",
          pageId: "seo-sem-presence",
          keepIfCondition:
            "!(#user?.organisationName == 'Canada') and !(#user?.organisationName == 'USA') and !(#user?.organisationName == 'Australie') ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-strategie-communication.title:Stratégie de communication}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-strategie-communication.description:Le Web : un support Marketing puissant et abordable.}",
          pageId: "seo-sem-strategie-communication",
          keepIfCondition:
            "(#user?.organisationName == 'Canada') or (#user?.organisationName == 'USA') or (#user?.organisationName == 'Australie') ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-google-display-network.title:Display}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-google-display-network.description:Le moyen d'accroître vos clients en ciblant une audience similaire.}",
          pageId: "seo-sem-google-display-network",
          keepIfCondition:
            "(#user?.organisationName == 'Canada') or (#user?.organisationName == 'USA') ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-remarketing.title:Remarketing}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-remarketing.description:Cibler des clients déjà intéressés par vos produits et services.}",
          pageId: "seo-sem-remarketing",
          keepIfCondition:
            "((#user?.organisationName == 'Canada') or (#user?.organisationName == 'USA') or (#user?.organisationName == 'Australie')) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-facebook-instagram.title:Facebook / Instagram}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-facebook-instagram.description:De nombreux critères pour ne retenir que les cibles pertinentes pour vous.}",
          pageId: "seo-sem-facebook-instagram",
          keepIfCondition:
            "((#user?.organisationName == 'Canada') or (#user?.organisationName == 'USA') or (#user?.organisationName == 'Australie')) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.seo-sem-facebook-formats.title:Facebook}",
          description:
            "{message:dynamicPages.model.tree.presentation.seo-sem-facebook-formats.description:Exemple d'annonce.}",
          pageId: "seo-sem-facebook-formats",
          keepIfCondition:
            "((#user?.organisationName == 'Canada') or (#user?.organisationName == 'USA') or (#user?.organisationName == 'Australie')) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.choix-du-support.title:Choix du support}",
          description:
            "{message:dynamicPages.model.tree.presentation.choix-du-support.description:Choisissons le bon support de communication pour vous.}",
          keepIfCondition: "!(#isCollectePaiement?:false)",
          pageId: "choix-du-support",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.seo-pricing-estimation.page.title:Estimations Google}",
          description:
            "{message:dynamicPages.model.seo-pricing-estimation.page.description:Découvrons ensemble les estimations Google.}",
          keepIfCondition:
            "!(#isCollectePaiement?:false) and (#pricing?:false) and !(#isVa?:false) and (#isPricingGoogle?:true)",
          pageId: "seo-pricing-estimation",
        },
      ],
    },
    {
      type: "chapter",
      title:
        "{message:dynamicPages.model.tree.presentation.chapter-va.title:Linkeo et vous}",
      pageId: "chapter-va",
      keepIfCondition: "!#isAcquisition && !(#isCollectePaiement?:false)",
      items: [
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.va-current-offer.title:Vos prestations Linkeo}",
          description:
            "{message:dynamicPages.model.tree.presentation.va-current-offer.description:Retrouvez ici l'ensemble de vos prestations Linkeo.}",
          keepIfCondition: "!(#isCollectePaiement?:false)",
          pageId: "va-current-offer",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.va-satisfaction.title:Votre niveau de satisfaction}",
          description:
            "{message:dynamicPages.model.tree.presentation.va-satisfaction.description:Notez votre satisfaction vis à vis de la prestation actuelle de Linkeo.}",
          pageId: "va-satisfaction",
          keepIfCondition: "((#hasFs?:false) or (#userDisplayFs?:true)) ",
        },
      ],
    },
    {
      type: "chapter",
      title:
        "{message:dynamicPages.model.tree.presentation.chapter-solutions.title:Nos solutions}",
      pageId: "chapter-solutions",
      keepIfCondition: "!(#isCollectePaiement?:false)",
      items: [
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.specialistes-restaurant.title:Spécialisation}",
          description:
            "{message:dynamicPages.model.tree.presentation.specialistes-restaurant.description:Nous sommes spécialistes de votre métier.}",
          pageId: "specialistes-restaurant",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationRestaurantsAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.enjeux-restaurant.title:Vos enjeux}",
          description:
            "{message:dynamicPages.model.tree.presentation.enjeux-restaurant.description:Notre compréhension de vos enjeux.}",
          pageId: "enjeux-restaurant",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationRestaurantsAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.specialistes-beautes.title:Spécialisation}",
          description:
            "{message:dynamicPages.model.tree.presentation.specialistes-beautes.description:Nous sommes spécialistes de votre métier.}",
          pageId: "specialistes-beautes",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationBeauteAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.enjeux-beautes.title:Vos enjeux}",
          description:
            "{message:dynamicPages.model.tree.presentation.enjeux-beautes.description:Notre compréhension de vos enjeux.}",
          pageId: "enjeux-beautes",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationBeauteAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.specialistes-second-oeuvre.title:Spécialisation}",
          description:
            "{message:dynamicPages.model.tree.presentation.specialistes-second-oeuvre.description:Nous sommes spécialistes de votre métier.}",
          pageId: "specialistes-second-oeuvre",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.enjeux-second-oeuvre.title:Vos enjeux}",
          description:
            "{message:dynamicPages.model.tree.presentation.enjeux-second-oeuvre.description:Notre compréhension de vos enjeux.}",
          pageId: "enjeux-second-oeuvre",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.specialistes-commerce.title:Spécialisation}",
          description:
            "{message:dynamicPages.model.tree.presentation.specialistes-commerce.description:Nous sommes spécialistes de votre métier.}",
          pageId: "specialistes-commerce",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationCommerceAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.enjeux-commerce.title:Vos enjeux}",
          description:
            "{message:dynamicPages.model.tree.presentation.enjeux-commerce.description:Notre compréhension de vos enjeux.}",
          pageId: "enjeux-commerce",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationCommerceAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.specialistes-immobilier.title:Spécialisation}",
          description:
            "{message:dynamicPages.model.tree.presentation.specialistes-immobilier.description:Nous sommes spécialistes de votre métier.}",
          pageId: "specialistes-immobilier",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationImmobilierAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.enjeux-immobilier.title:Vos enjeux}",
          description:
            "{message:dynamicPages.model.tree.presentation.enjeux-immobilier.description:Notre compréhension de vos enjeux.}",
          pageId: "enjeux-immobilier",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationImmobilierAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.specialistes-auto.title:Spécialisation}",
          description:
            "{message:dynamicPages.model.tree.presentation.specialistes-auto.description:Nous sommes spécialistes de votre métier.}",
          pageId: "specialistes-auto",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationAutoAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.enjeux-auto.title:Vos enjeux}",
          description:
            "{message:dynamicPages.model.tree.presentation.enjeux-auto.description:Notre compréhension de vos enjeux.}",
          pageId: "enjeux-auto",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationAutoAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.offre-heberge-ou-autre-hebergeur.title:Offre hebérgé ou non hébérgé}",
          description:
            "{message:dynamicPages.model.tree.presentation.offre-heberge-ou-autre-hebergeur.description:Découvrez nos recommandations pour votre activité.}",
          pageId: "offre-heberge-ou-autre-hebergeur",
          keepIfCondition:
            "!#isFsOnly and !(#offreVerticalisationImmobilierAvailable?:false) and !(#offreVerticalisationAutoAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.title:Le bon pack}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.description:Découvrez nos recommandations pour votre activité.}",
          pageId: "solutions-le-bon-pack",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isVa and !#isFsOnly and !(#offreVerticalisationAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.title:Le bon pack}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.description:Découvrez nos recommandations pour votre activité.}",
          pageId: "solutions-le-bon-pack-offre-restaurant",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isVa and !#isFsOnly and (#offreVerticalisationRestaurantsAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.title:Le bon pack}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.description:Découvrez nos recommandations pour votre activité.}",
          pageId: "solutions-le-bon-pack-offre-beaute",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isVa and !#isFsOnly and (#offreVerticalisationBeauteAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.title:Le bon pack}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.description:Découvrez nos recommandations pour votre activité.}",
          pageId: "solutions-le-bon-pack-offre-construction",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isVa and !#isFsOnly and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.title:Le bon pack}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.description:Découvrez nos recommandations pour votre activité.}",
          pageId: "solutions-le-bon-pack-offre-commerce",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isVa and !#isFsOnly and (#offreVerticalisationCommerceAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.title:Le bon pack}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.description:Découvrez nos recommandations pour votre activité.}",
          pageId: "solutions-le-bon-pack-offre-immobilier",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isVa and !#isFsOnly and (#offreVerticalisationImmobilierAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.title:Le bon pack}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack.description:Découvrez nos recommandations pour votre activité.}",
          pageId: "solutions-le-bon-pack-offre-auto",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isVa and !#isFsOnly and (#offreVerticalisationAutoAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-packs.title:Quels sont vos objectifs ?}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-packs.description:Sélectionnez la solution qui paraît la plus adaptée à votre projet.}",
          pageId: "solutions-packs",
          keepIfCondition: "!(#isAh?:false) and (!#orderHasNewPack or #isVa)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content",
          keepIfCondition:
            "!#isFsOnly and #nomPack == 'PackPremium' and !(#isAh?:false) and !(#offreVerticalisationAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-ah",
          keepIfCondition:
            "!#isFsOnly and #nomPack == 'PackPremium' and (#isAh?:false) and !(#offreVerticalisationAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-offre-restaurant",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and !(#isAh?:false) and (#offreVerticalisationRestaurantsAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-offre-restaurant-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and (#isAh?:false) and (#offreVerticalisationRestaurantsAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-offre-beaute",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and !(#isAh?:false) and (#offreVerticalisationBeauteAvailable?:false)",
        },

        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-offre-beaute-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and (#isAh?:false) and (#offreVerticalisationBeauteAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-offre-construction",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and !(#isAh?:false) and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-offre-construction-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and (#isAh?:false) and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-commerce",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and !(#isAh?:false) and (#offreVerticalisationCommerceAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-content-commerce-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and (#isAh?:false) and (#offreVerticalisationCommerceAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-immobilier-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and (#offreVerticalisationImmobilierAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.title:Votre pack Premium}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-content.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-auto-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackPremium' and (#offreVerticalisationAutoAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and !(#isAh?:false) and !(#offreVerticalisationAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and (#isAh?:false) and !(#offreVerticalisationAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-offre-restaurant",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and !(#isAh?:false) and (#offreVerticalisationRestaurantsAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-offre-restaurant-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and (#isAh?:false) and (#offreVerticalisationRestaurantsAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-offre-beaute",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and !(#isAh?:false) and (#offreVerticalisationBeauteAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-offre-beaute-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and (#isAh?:false) and (#offreVerticalisationBeauteAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-offre-construction",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and !(#isAh?:false) and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-offre-construction-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and (#isAh?:false) and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-commerce",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and (#offreVerticalisationCommerceAvailable?:false) and !(#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-content-commerce-ah",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and (#isAh?:false) and (#offreVerticalisationCommerceAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-immobilier-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and (#offreVerticalisationImmobilierAvailable?:false) and !(#isAh?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.title:Votre pack Expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-expert-content.description:Découvrez toutes les solutions incluses dans votre pack Expert.}",
          pageId: "solutions-le-bon-pack-expert-auto-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackExpert' and (#offreVerticalisationAutoAvailable?:false) and !(#isAh?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-content",
          keepIfCondition:
            "!#isFsOnly and #nomPack == 'PackEssentiel' and !(#isAh?:false) and !(#offreVerticalisationAvailable?:false) and (#isSEOBooster?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-ah-commerce-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationCommerceAvailable?:false) and (#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-content-offre-beaute",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationBeauteAvailable?:false) and !(#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-ah-content-offre-beaute",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationBeauteAvailable?:false) and (#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-ah-content-offre-restaurant",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationRestaurantsAvailable?:false) and (#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-ah-immobilier-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationImmobilierAvailable?:false) and (#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-ah-auto-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationAutoAvailable?:false) and (#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-content-offre-restaurant",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and !(#isAh?:false) and (#offreVerticalisationRestaurantsAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-content-offre-construction",
          keepIfCondition:
            "!#isVa and !#isFsOnly and !(#isAh?:false) and #nomPack == 'PackVisites' and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId:
            "solutions-le-bon-pack-essentiel-ah-content-offre-construction",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#isAh?:false) and #nomPack == 'PackVisites' and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-commerce-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationCommerceAvailable?:false) and !(#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-immobilier-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationImmobilierAvailable?:false) and !(#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.title:Votre pack Essentiel}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-essentiel-content.description:Découvrez toutes les solutions incluses dans votre pack Essentiel.}",
          pageId: "solutions-le-bon-pack-essentiel-auto-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and (#offreVerticalisationAutoAvailable?:false) and !(#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-visite-content.title:Votre pack Visite}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-visite-content.description:Découvrez toutes les solutions incluses dans votre pack Visite.}",
          pageId: "solutions-le-bon-pack-visite-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and !(#offreVerticalisationAvailable?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-e-commerce-content.title:Votre pack E-commerce}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-e-commerce-content.description:Voici toutes les solutions incluses dans votre pack e-commerce}",
          pageId: "solutions-le-bon-pack-e-commerce-content",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomOffrePackEcommerce == 'Shopify' and !(#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-site-responsive.title:Site responsive}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-site-responsive.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-site-responsive",
          keepIfCondition:
            "!(#isAh?:false) and !#isFsOnly and (#nomPack == 'PackPremium' or #nomPack == 'PackEssentiel' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites') and !(#offreVerticalisationAutoAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-site-catalogue-auto.title:Site Catalogue Auto}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-site-catalogue-auto.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-site-catalogue-auto",
          keepIfCondition:
            "!(#isAh?:false) and !#isFsOnly and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites') and (#offreVerticalisationAutoAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-visite-zoom-garantie-visites.title:Garantie de visites}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-visite-zoom-garantie-visites.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-visite-zoom-garantie-visites",
          keepIfCondition:
            "!#isVa and !#isFsOnly and #nomPack == 'PackVisites' and !#isEssentiel",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-seo.title:SEO}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-seo.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-seo-ah",
          keepIfCondition: "!#isFsOnly and (#isAh?:false) and (#isSEO?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-seo.title:SEO}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-seo.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-seo",
          keepIfCondition: "!#isFsOnly and !(#isAh?:false) and (#isSEO?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-seo-booster.title:Booster SEO}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-seo-booster.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-seo-booster",
          keepIfCondition: "!#isFsOnly and (#isSEOBooster?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-services.page.title:Sélection de vos prestations}",
          description:
            "{message:dynamicPages.model.solutions-pricing-services.page.description:Pour votre référencement naturel (SEO) ou vos campagnes Media (SEA), un choix rigoureux de vos préstations est nécessaire.}",
          keepIfCondition:
            "(#isVa?:false) and (#isSEOBooster?:false) and ((#nomPack == 'PackPremium') or (#nomPack == 'PackExpert')) and (#user?.organisationName == 'France' or #user?.organisationName == 'Télévente')",
          pageId: "solutions-pricing-services",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-le-bon-pack-zoom-immobilier.page.title:Passerelle}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-seo.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-passerelle",
          keepIfCondition:
            "!#isFsOnly and ((#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites') and (#offreVerticalisationImmobilierAvailable?:false)) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-le-bon-pack-zoom-auto_passerelle.page.title:Passerelle}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-seo.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-auto-passerelle",
          keepIfCondition:
            "!#isFsOnly and ((#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites') and (#offreVerticalisationAutoAvailable?:false)) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.title:SEM}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-sem",
          keepIfCondition:
            "!#isFsOnly and !(#pricing?:false) and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or (#offreVerticalisationImmobilierAvailable?:false) or (#offreVerticalisationAutoAvailable?:false) or (#offreVerticalisationConstruction2ndOeuvreAvailable?:false)) and !(#isAh?:false) and !#isVa",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem-optionnel.title:SEM (Optionnel)}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-sem-optionnel",
          keepIfCondition:
            "!#isFsOnly and (#nomOffrePackEcommerce == 'Shopify') and !(#isAh?:false) and !#isVa",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.title:SEM}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-sem-pricing",
          keepIfCondition:
            "!#isFsOnly and (#pricing?:false) and #orderHasNewPack and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or (#offreVerticalisationImmobilierAvailable?:false) or (#offreVerticalisationAutoAvailable?:false) or (#offreVerticalisationConstruction2ndOeuvreAvailable?:false)) and !#isVa",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.title:SEM}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-sem-va",
          keepIfCondition:
            "!#isFsOnly and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert') and #isVa",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.title:SEM}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-sem.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-sem-ah",
          keepIfCondition:
            "!#isFsOnly and !(#pricing?:false) and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert') and (#isAh?:false) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-adword.page.title:Vos prévisions de traffic sur Google}",
          description:
            "{message:dynamicPages.model.solutions-pricing-adword.page.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-pricing-adword",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isFsOnly and !(#nomOffrePackEcommerce == 'Shopify') and (#pricing?:false) and !#isVa and ((#isAdwordPricing?:false) or (#nomPack == 'PackVisites' and !((#offreVerticalisationConstruction2ndOeuvreAvailable?:false) or (#offreVerticalisationImmobilierAvailable?:false) or (#offreVerticalisationAutoAvailable?:false)))) and (!#isEssentiel or (#offreVerticalisationConstruction2ndOeuvreAvailable?:false) or (#offreVerticalisationImmobilierAvailable?:false) or (#offreVerticalisationAutoAvailable?:false))",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-facebook.page.title:Vos prévisions de traffic sur Facebook}",
          description:
            "{message:dynamicPages.model.solutions-pricing-adword.page.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-pricing-facebook",
          keepIfCondition:
            "!(#isTeleventeVD?:false) and !#isFsOnly and !(#nomOffrePackEcommerce == 'Shopify') and (#pricing?:false) and !#isVa and (#hasFacebook?:false) and (!#isEssentiel or (#offreVerticalisationConstruction2ndOeuvreAvailable?:false) or (#offreVerticalisationImmobilierAvailable?:false) or (#offreVerticalisationAutoAvailable?:false)) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-zoom-ereputation.title:E-réputation}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-zoom-ereputation.description:D\\u00e9couvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-zoom-ereputation-new",
          keepIfCondition:
            "!#isFsOnly and #orderHasNewPack and ((((#offreVerticalisationConstruction2ndOeuvreAvailable?:false) or (#offreVerticalisationImmobilierAvailable?:false) or (#offreVerticalisationAutoAvailable?:false)) and #nomPack == 'PackPremium') or (!(#offreVerticalisationAvailable?:false) and #nomPack == 'PackPremium') or (#offreVerticalisationRestaurantsAvailable?:false) or (#offreVerticalisationBeauteAvailable?:false) or (#offreVerticalisationCommerceAvailable?:false)) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-zoom-suivi-expert.title:Suivi expert}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-zoom-suivi-expert.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-zoom-suivi-expert",
          keepIfCondition: "!#isFsOnly and (#nomPack == 'PackPremium') ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-offre-construction-zoom-quote.title:Quote}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-offre-construction-zoom-quote.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-offre-construction-zoom-quote",
          keepIfCondition:
            "!#isFsOnly and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert') and (#offreVerticalisationConstruction2ndOeuvreAvailable?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-zoom-modules.title:Modules de communication}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-zoom-modules.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-zoom-modules",
          keepIfCondition:
            "!#isFsOnly and ((#nomPack == 'PackPremium' and !(#offreVerticalisationAvailable?:false)) or (#orderHasNewPack and (#offreVerticalisationAvailable?:false))) and !(#isAh?:false) and !((#nomPack == 'PackVisites' or #nomPack == 'PackEssentiel' or #nomPack == 'PackExpert') and ((#offreVerticalisationImmobilierAvailable?:false) or (#offreVerticalisationAutoAvailable?:false) or(#offreVerticalisationConstruction2ndOeuvreAvailable?:false))) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-zoom-modules.title:Modules de communication}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-premium-zoom-modules.description:Découvrez toutes les solutions incluses dans votre pack Premium.}",
          pageId: "solutions-le-bon-pack-premium-zoom-modules-ah",
          keepIfCondition:
            "!#isFsOnly and ((#nomPack == 'PackPremium' and !(#offreVerticalisationAvailable?:false)) or (#orderHasNewPack and (#offreVerticalisationAvailable?:false))) and (#isAh?:false) and !((#nomPack == 'PackVisites' or #nomPack == 'PackEssentiel' or #nomPack == 'PackExpert') and ((#offreVerticalisationImmobilierAvailable?:false) or (#offreVerticalisationAutoAvailable?:false) or(#offreVerticalisationConstruction2ndOeuvreAvailable?:false))) ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-module-review-offre-verticalisation.title:Module Review}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-module-review-offre-verticalisation.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId:
            "solutions-le-bon-pack-zoom-module-review-offre-verticalisation",
          keepIfCondition:
            "!#isVa and !#isFsOnly and ((#offreVerticalisationAutoAvailable?:false) and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites'))",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-modules-commerce-planner.title:Module Planner}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-modules-commerce-planner.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-modules-commerce-planner",
          keepIfCondition:
            "!#isVa and !#isFsOnly and ((#offreVerticalisationBeauteAvailable?:false) or (#offreVerticalisationCommerceAvailable?:false)) and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites')",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-modules-commerce-deliver.title:Module Deliver}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-modules-commerce-deliver.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-le-bon-pack-zoom-modules-commerce-deliver",
          keepIfCondition:
            "!#isVa and !#isFsOnly and ((#offreVerticalisationRestaurantsAvailable?:false) or (#offreVerticalisationCommerceAvailable?:false)) and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites')",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-modules-restaurant-select-offre-commerce.title:Sélectionnez votre solution}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-modules-restaurant-select-offre-restaurant.description:Quelle(s) solution(s) vous correspond(ent) le mieux ?}",
          pageId:
            "solutions-le-bon-pack-zoom-modules-commerce-select-offre-commerce",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#offreVerticalisationCommerceAvailable?:false) and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites') ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-module-deliver-options.title:Votre module Deliver}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-le-bon-pack-zoom-module-deliver-options.description:Découvrez toutes les options disponibles dans votre module.}",
          pageId: "solutions-le-bon-pack-zoom-module-deliver-options",
          keepIfCondition:
            "!#isVa and !#isFsOnly and (#deliverInPack) and ((#offreVerticalisationRestaurantsAvailable?:false) or (#offreVerticalisationCommerceAvailable?:false)) and (#nomPack == 'PackPremium' or #nomPack == 'PackExpert' or #nomPack == 'PackVisites') ",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-audience.title:Quelle audience atteindre ?}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-audience.description:Optimisez vos objectifs en terme de visites mensuelles.}",
          pageId: "solutions-audience",
          keepIfCondition:
            "!#orderHasNewPack or #nomOffrePackEcommerce == 'Shopify'",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-adword.page.title:Vos prévisions de traffic sur Google}",
          description:
            "{message:dynamicPages.model.solutions-pricing-adword.page.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-pricing-adword",
          keepIfCondition:
            "(#isAdwordPricing?:false) and (#isTeleventeVD?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-facebook.page.title:Vos prévisions de traffic sur Facebook}",
          description:
            "{message:dynamicPages.model.solutions-pricing-adword.page.description:Découvrez toutes les solutions incluses dans votre pack.}",
          pageId: "solutions-pricing-facebook",
          keepIfCondition: "(#hasFacebook?:false)  and (#isTeleventeVD?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-recommandations.title:Nos recommandations}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-recommandations.description:Découvrez les solutions que nous recommandons pour votre activité.}",
          keepIfCondition: "!(#isCollectePaiement?:false)",
          pageId: "solutions-recommandations",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.solutions-pricing-services.page.title:Sélection de vos prestations}",
          description:
            "{message:dynamicPages.model.solutions-pricing-services.page.description:Pour votre référencement naturel (SEO) ou vos campagnes Media (SEA), un choix rigoureux de vos préstations est nécessaire.}",
          keepIfCondition:
            "(#isVa?:false) and (#isSEOBooster?:false) and (#nomPack == null)",
          pageId: "solutions-pricing-services",
        },
      ],
    },
    {
      type: "chapter",
      title:
        "{message:dynamicPages.model.tree.presentation.chapter-selection.title:Votre sélection}",
      pageId: "chapter-selection",
      items: [
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-cart.title:Votre sélection}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-cart.description:Retrouvez ici l'ensemble des solutions sélectionnées.}",
          keepIfCondition: "!(#isCollectePaiement?:false)",
          pageId: "solutions-cart",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-config.title:Configuration}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-config.description:Configurez ici les solutions sélectionnées.}",
          pageId: "solutions-config",
          keepIfCondition:
            "!#isFsOnly and !(#clientKnowsNewSolutionsConfigurationPage?:false) and !(#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-config.title:Configuration}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-config.description:Configurez ici les solutions sélectionnées.}",
          pageId: "solutions-configuration",
          keepIfCondition:
            "!#isFsOnly and (#clientKnowsNewSolutionsConfigurationPage?:false) and !(#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-payment.title:Paiement}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-payment.description:Renseignez ici votre mode de paiement et vos coordonnées bancaires.}",
          pageId: "solutions-payment",
          keepIfCondition: "!#isFsOnly",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-last-check.title:Validation}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-last-check.description:Vérification de la validité des informations fournies.}",
          pageId: "solutions-last-check",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-second-rdv-confirmation.title:Merci !}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-second-rdv-confirmation.description:Merci d'avoir fourni les éléments financiers, n'oubliez pas de joindre les pièces complémentaires}",
          pageId: "solutions-second-rdv-confirmation",
          keepIfCondition: "!#isFsOnly and (#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-summary.title:Récapitulatif commande}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-summary.description:Vérifiez les données contractuelles et de financement.}",
          pageId: "solutions-summary",
          keepIfCondition: "!#isFsOnly and !(#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-televente-reception-document.title:Récupération PJs}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-televente-reception-document.description:Réception des Pièces obligatoires à joindre au contrat.}",
          pageId: "solutions-televente-reception-document",
          keepIfCondition:
            "(#user?.organisationName == 'Télévente') and !#isFsOnly and !(#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-contrat.title:Contrat}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-contrat.description:Validez votre commande.}",
          pageId: "solutions-contrat",
          keepIfCondition:
            "((#user?.organisationName == 'France' or #user?.organisationName == 'Télévente') or #dynamicPagesVersion == null or #dynamicPagesVersion < 5) and (!(#eSignature?:false) or #isFsOnly) and !(#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-contrat.title:Contrat}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-contrat.description:Validez votre commande.}",
          pageId: "solutions-american-contract",
          keepIfCondition:
            "(#user?.organisationName != 'France' and #user?.organisationName != 'Télévente') and !(#eSignature?:false) and !(#isCollectePaiement?:false)",
        },
        {
          type: "step",
          title:
            "{message:dynamicPages.model.tree.presentation.solutions-contrat.title:Contrat}",
          description:
            "{message:dynamicPages.model.tree.presentation.solutions-contrat.description:Validez votre commande.}",
          pageId: "solutions-contrat-signature",
          keepIfCondition:
            "(#eSignature?:false) and !#isFsOnly and !(#isCollectePaiement?:false)",
        },
      ],
    },
  ],
};