import { slugify } from "../utils/general";
import { getImgPath } from './testAuthProfile';

export const offeringsArr = [
  {
    id: 1,
    // subordinate debt
    sponsor: 'ABC Corp',
    title: 'Buffalo Creek Wind Farm',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 30,
      capacityKWh: 30,
      ppaTerm: 0,
      ppaPriceUSD: 100,
    },
    financials: {
      otherClass: 'Project Development',
      instrument: 'debt',
      investmentClass: 'Mezzanine',
      expectedReturn: 1800000,
      fundTarget: 1500000,
      amtFunded: 500000,
      principalOutstanding: 0.12,
      interestAccrued: 0.097,
      ppaCounterparty: 'Counterparty 1',
      annualInterest: '0.097',
      term: {
        length: 4*365*24*60*60*1000,
        get startDt() {return 1612291996043 || this.dt.financials.term.stopDt - this.dt.financials.term.length},
        get stopDt() {return this.dt.financials.term.startDt + this.dt.financials.term.length},
      },
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {title: `Shareholder's Agreement` , filePath: 'shareholder-agreement.pdf' , type: 'doctype1'},
        {title: `Power Purhcase Agreement`, filePath: 'ppa.pdf'                   , type: 'doctype2'},
        {title: `Land Lease`              , filePath: 'land-lease.pdf'            , type: 'doctype3'},
        {title: `Connection Agreement`    , filePath: 'connection-agreement.pdf'  , type: 'doctype4'},
      ],
    },
    dtListed: 1612291996043,
    get dtInvestmentTermStart() {return this.dtListed + 5.3*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 380*24*60*60*1000},
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'USA',
        stateProvince: 'Oklahoma',
        city: 'Tulsa',
        street: 'Main',
        buildingNumber: '123',
        apartment: '',
      },
    },
    content: {
      about: `\tInvest indirectly in a mezzanine loan secured by a 11 MwH wind farm in Buffalo, New York. This is a project finance opportunity which is expected to be commercially operational in four years. The minimum investment amount is $15,000.`,
      investment: `Investment

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas diam. Erat nam at lectus urna duis convallis convallis tellus. Augue interdum velit euismod in pellentesque massa. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim ut tellus elementum sagittis vitae. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Gravida arcu ac tortor dignissim convallis aenean. Vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim convallis aenean et tortor. Ultrices in iaculis nunc sed augue. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lectus quam id leo in vitae turpis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Orci dapibus ultrices in iaculis nunc sed. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Et tortor at risus viverra adipiscing at. Fames ac turpis egestas maecenas pharetra convallis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.

Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. Sit amet purus gravida quis blandit turpis. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam quis enim. Ut diam quam nulla porttitor massa id neque aliquam. Augue mauris augue neque gravida in fermentum et sollicitudin. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nunc id cursus metus aliquam.

Project

Habitasse platea dictumst quisque sagittis. Eu lobortis elementum nibh tellus molestie nunc. Dictum fusce ut placerat orci nulla pellentesque. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Integer vitae justo eget magna. Id diam maecenas ultricies mi eget mauris. Ut diam quam nulla porttitor. Euismod lacinia at quis risus sed vulputate odio ut enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut.

Business Plan

Orci a scelerisque purus semper eget duis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Urna cursus eget nunc scelerisque viverra mauris in. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Interdum posuere lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam ultrices sagittis orci a scelerisque. Varius quam quisque id diam. Et netus et malesuada fames ac. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Faucibus purus in massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum. Iaculis at erat pellentesque adipiscing. Praesent semper feugiat nibh sed. Amet aliquam id diam maecenas ultricies mi eget. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Proin gravida hendrerit lectus a. Nulla facilisi cras fermentum odio.

Eros in cursus turpis massa tincidunt dui ut. Iaculis nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae justo. Non consectetur a erat nam at lectus urna duis. Senectus et netus et malesuada fames. Elit pellentesque habitant morbi tristique senectus et. Nullam ac tortor vitae purus faucibus. Pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis. Nisi scelerisque eu ultrices vitae auctor eu. Sit amet justo donec enim diam vulputate. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue. Vestibulum mattis ullamcorper velit sed. Egestas diam in arcu cursus. Enim sit amet venenatis urna cursus. Consectetur a erat nam at. Luctus accumsan tortor posuere ac ut consequat.

Lacus sed viverra tellus in hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat blandit aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Quis viverra nibh cras pulvinar mattis nunc. Fringilla ut morbi tincidunt augue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Leo integer malesuada nunc vel. Eu sem integer vitae justo eget magna fermentum iaculis. Gravida quis blandit turpis cursus in hac. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In hac habitasse platea dictumst quisque sagittis purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Commodo sed egestas egestas fringilla phasellus. Donec enim diam vulputate ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cras sed felis eget velit aliquet sagittis id consectetur.

Capital Stack and Investor Returns

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. 

[Capital Stack Graphic]

[Table]

Development Timeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. Ac turpis egestas maecenas pharetra. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Ultricies mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque. Consequat nisl vel pretium lectus quam id leo. Ridiculus mus mauris vitae ultricies leo. Mauris in aliquam sem fringilla ut morbi.

Expenses and Fees

[Table]

Site Plan

[Project Blueprint]

`,
      sponsor: `Sponsor

  Overview
  
  [Sponsor Name] was formed by [Team Member #1], [Team Member #2], and [Team Member #3], who teamed up in [year] to develop [wind/solar/battery/infrastructure] in the [region] area, a market they believed was underserved. Prior to [year] , [fake story about what they did in business before]. Since then, [Sponsor Name] and its affiliated entities have formed joint ventures with prominent publicly traded [companies], institutional private equity groups and family offices to become one of the most prolific developers of [wind/solar/battery/infrastructure] in [region]. Currently, the Sponsor is increasing the size of its [region] portfolio.
  
  Since [year], the Sponsor and its affiliates have completed the construction and development of [number] sites in [region], of which two sites have since been sold to a national publicly-traded REIT. SNL and its affiliates currently own ten operating self-storage facilities in New York City, totaling approximately [number/MwH] of renewable energy. Each of the facilities was sourced, developed and constructed by the [Sponsor]. These facilities are located at:
  
  [list of operational projects]
  
  Additionally, the Sponsor and its affiliates are expecting to complete in 2021, the development of [number] additional projects aggregating approximately [number/MwH], and have another [number] additional projects either under construction or in its development pipeline. The Sponsor expects that at the end of 2021, it and its affiliates will have approximately [number/MwH] of energy production under management.
  
  
  Leadership Team
  
  Team Member #1
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #2
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #3
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
      `,
      disclaimer: `
      Disclaimer

The content on this detail page was produced by the Sponsor or an affiliate thereof. The Sponsor is under no obligation to update this detail page. None of the opinions expressed on this detail page are the opinions of Envest and they are not endorsed by Envest. Assumptions and projections included in this detail page are not reflective of the position of Envest or any other person or entity other than [Sponsor Name], a Delaware limited liability company (the “Issuer”) or its affiliates.
The preceding summary of principal terms of the offering is qualified in its entirety by reference to the more complete information about the offering contained in the offering documents, including, without limitation, the Confidential Private Placement Memorandum of the Issuer dated February 2021, the Amended and Restated Operating Agreement of the Issuer, Subscription Agreement for Class B Units of the Issuer, and all exhibits and other documents attached thereto or referenced therein (collectively, the "Investment Documents"). This summary is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment. In the event of an inconsistency between the preceding summary and the Investment Documents, investors should rely on the content of the Investment Documents.
There can be no assurance that the methodology used for calculating targeted IRR is appropriate or adequate. Target IRR is presented solely for the purpose of providing insight into the Issuer’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Issuer’s performance. Targeted IRR is not a predictor, projection or guarantee of future performance. There can be no assurance that the Issuer’s targets will be met or that the Issuer will be successful in identifying and investing in investment opportunities that would allow the Issuer to meet these return parameters. Target returns should not be used as a primary basis for an investor’s decision to invest in the Issuer. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.
All forward–looking statements attributable to the Sponsor or persons acting on its behalf apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in this summary and the Investment Documents. Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward–looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events. Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.
The interests in the Issuer will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon exemptions contained in Rule 506(c) of Regulation D as promulgated under the Securities Act. In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration. Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
All investing activities risk the loss of capital. There can be no assurance that investors will not suffer significant losses. No guarantee or representation is made that investment objectives of the Issuer will be achieved. You should not subscribe to purchase interests in the Issuer unless you can readily bear the consequences of such loss.
Interests in the Issuer are listed on the Envest Marketplace. Envest receives fees from the Sponsor or the investment vehicle partially based on the number of investor rooms created. This arrangement could create a conflict of interest between CrowdStreet and investors.
Certain Envest employees may have an interest in, or family members or close friends of Envest employees may have an interest in, or employment or other relationship with, the Issuer or one of its affiliates. Although Envest has a thorough screening process with respect to each investment opportunity, the fact that Envest employees may have an interest in, or may have family members or close friends with an interest in, or employment or other relationship with, the Issuer or one of its affiliates could create an incentive for Envest to approve the Issuer for the Marketplace.
`,
    },
    images: {
      get large() {return this.card},
      card: getImgPath(`extern4l-content.duckduckgo.com.jpg`),
    },
  },
  {
    id: 2,
    sponsor: 'Greenbacker Capital',
    title: 'Hydroelectric Dam 2',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 101,
      capacityKWh: 101,
      ppaTerm: 0,
      ppaPriceUSD: 97,
    },
    financials: {
      otherClass: 'Debt Refinancing',
      instrument: 'debt',
      investmentClass: 'Common Stock',
      expectedReturn: 1100000,
      fundTarget: 921742,
      amtFunded: 880000,
      principalOutstanding: 0.081,
      interestAccrued: 0.078,
      ppaCounterparty: 'Counterparty 2',
      annualInterest: '0.097',
      term: {
        length: 4*365*24*60*60*1000,
        get startDt() {return 1612291996043 || this.dt.financials.term.stopDt - this.dt.financials.term.length},
        get stopDt() {return this.dt.financials.term.startDt + this.dt.financials.term.length},
      },
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {title: `Shareholder's Agreement` , filePath: 'shareholder-agreement.pdf' , type: 'doctype1'},
        {title: `Power Purhcase Agreement`, filePath: 'ppa.pdf'                   , type: 'doctype2'},
        {title: `Land Lease`              , filePath: 'land-lease.pdf'            , type: 'doctype3'},
        {title: `Connection Agreement`    , filePath: 'connection-agreement.pdf'  , type: 'doctype4'},
      ],
    },
    dtListed: 1610671996043,
    get dtInvestmentTermStart() {return this.dtListed + 3.3*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 181*24*60*60*1000},
    location: {
      coordinates: {lat: 2.1010101, lon: -1.1049293},
      address: {
        country: 'USA',
        stateProvince: 'Kansas',
        city: 'Kansas City',
        street: 'Broad St.',
        buildingNumber: '123',
        apartment: '',
      },
    },
    content: {
      about: `\tInvest indirectly in a mezzanine loan secured by a 11 MwH wind farm in Buffalo, New York. This is a project finance opportunity which is expected to be commercially operational in four years. The minimum investment amount is $15,000.`,
      investment: `Investment

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas diam. Erat nam at lectus urna duis convallis convallis tellus. Augue interdum velit euismod in pellentesque massa. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim ut tellus elementum sagittis vitae. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Gravida arcu ac tortor dignissim convallis aenean. Vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim convallis aenean et tortor. Ultrices in iaculis nunc sed augue. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lectus quam id leo in vitae turpis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Orci dapibus ultrices in iaculis nunc sed. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Et tortor at risus viverra adipiscing at. Fames ac turpis egestas maecenas pharetra convallis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.

Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. Sit amet purus gravida quis blandit turpis. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam quis enim. Ut diam quam nulla porttitor massa id neque aliquam. Augue mauris augue neque gravida in fermentum et sollicitudin. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nunc id cursus metus aliquam.

Project

Habitasse platea dictumst quisque sagittis. Eu lobortis elementum nibh tellus molestie nunc. Dictum fusce ut placerat orci nulla pellentesque. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Integer vitae justo eget magna. Id diam maecenas ultricies mi eget mauris. Ut diam quam nulla porttitor. Euismod lacinia at quis risus sed vulputate odio ut enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut.

Business Plan

Orci a scelerisque purus semper eget duis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Urna cursus eget nunc scelerisque viverra mauris in. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Interdum posuere lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam ultrices sagittis orci a scelerisque. Varius quam quisque id diam. Et netus et malesuada fames ac. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Faucibus purus in massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum. Iaculis at erat pellentesque adipiscing. Praesent semper feugiat nibh sed. Amet aliquam id diam maecenas ultricies mi eget. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Proin gravida hendrerit lectus a. Nulla facilisi cras fermentum odio.

Eros in cursus turpis massa tincidunt dui ut. Iaculis nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae justo. Non consectetur a erat nam at lectus urna duis. Senectus et netus et malesuada fames. Elit pellentesque habitant morbi tristique senectus et. Nullam ac tortor vitae purus faucibus. Pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis. Nisi scelerisque eu ultrices vitae auctor eu. Sit amet justo donec enim diam vulputate. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue. Vestibulum mattis ullamcorper velit sed. Egestas diam in arcu cursus. Enim sit amet venenatis urna cursus. Consectetur a erat nam at. Luctus accumsan tortor posuere ac ut consequat.

Lacus sed viverra tellus in hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat blandit aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Quis viverra nibh cras pulvinar mattis nunc. Fringilla ut morbi tincidunt augue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Leo integer malesuada nunc vel. Eu sem integer vitae justo eget magna fermentum iaculis. Gravida quis blandit turpis cursus in hac. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In hac habitasse platea dictumst quisque sagittis purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Commodo sed egestas egestas fringilla phasellus. Donec enim diam vulputate ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cras sed felis eget velit aliquet sagittis id consectetur.

Capital Stack and Investor Returns

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. 

[Capital Stack Graphic]

[Table]

Development Timeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. Ac turpis egestas maecenas pharetra. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Ultricies mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque. Consequat nisl vel pretium lectus quam id leo. Ridiculus mus mauris vitae ultricies leo. Mauris in aliquam sem fringilla ut morbi.

Expenses and Fees

[Table]

Site Plan

[Project Blueprint]

`,
      sponsor: `Sponsor

  Overview
  
  [Sponsor Name] was formed by [Team Member #1], [Team Member #2], and [Team Member #3], who teamed up in [year] to develop [wind/solar/battery/infrastructure] in the [region] area, a market they believed was underserved. Prior to [year] , [fake story about what they did in business before]. Since then, [Sponsor Name] and its affiliated entities have formed joint ventures with prominent publicly traded [companies], institutional private equity groups and family offices to become one of the most prolific developers of [wind/solar/battery/infrastructure] in [region]. Currently, the Sponsor is increasing the size of its [region] portfolio.
  
  Since [year], the Sponsor and its affiliates have completed the construction and development of [number] sites in [region], of which two sites have since been sold to a national publicly-traded REIT. SNL and its affiliates currently own ten operating self-storage facilities in New York City, totaling approximately [number/MwH] of renewable energy. Each of the facilities was sourced, developed and constructed by the [Sponsor]. These facilities are located at:
  
  [list of operational projects]
  
  Additionally, the Sponsor and its affiliates are expecting to complete in 2021, the development of [number] additional projects aggregating approximately [number/MwH], and have another [number] additional projects either under construction or in its development pipeline. The Sponsor expects that at the end of 2021, it and its affiliates will have approximately [number/MwH] of energy production under management.
  
  
  Leadership Team
  
  Team Member #1
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #2
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #3
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
      `,
      disclaimer: `
      Disclaimer

The content on this detail page was produced by the Sponsor or an affiliate thereof. The Sponsor is under no obligation to update this detail page. None of the opinions expressed on this detail page are the opinions of Envest and they are not endorsed by Envest. Assumptions and projections included in this detail page are not reflective of the position of Envest or any other person or entity other than [Sponsor Name], a Delaware limited liability company (the “Issuer”) or its affiliates.
The preceding summary of principal terms of the offering is qualified in its entirety by reference to the more complete information about the offering contained in the offering documents, including, without limitation, the Confidential Private Placement Memorandum of the Issuer dated February 2021, the Amended and Restated Operating Agreement of the Issuer, Subscription Agreement for Class B Units of the Issuer, and all exhibits and other documents attached thereto or referenced therein (collectively, the "Investment Documents"). This summary is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment. In the event of an inconsistency between the preceding summary and the Investment Documents, investors should rely on the content of the Investment Documents.
There can be no assurance that the methodology used for calculating targeted IRR is appropriate or adequate. Target IRR is presented solely for the purpose of providing insight into the Issuer’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Issuer’s performance. Targeted IRR is not a predictor, projection or guarantee of future performance. There can be no assurance that the Issuer’s targets will be met or that the Issuer will be successful in identifying and investing in investment opportunities that would allow the Issuer to meet these return parameters. Target returns should not be used as a primary basis for an investor’s decision to invest in the Issuer. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.
All forward–looking statements attributable to the Sponsor or persons acting on its behalf apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in this summary and the Investment Documents. Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward–looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events. Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.
The interests in the Issuer will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon exemptions contained in Rule 506(c) of Regulation D as promulgated under the Securities Act. In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration. Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
All investing activities risk the loss of capital. There can be no assurance that investors will not suffer significant losses. No guarantee or representation is made that investment objectives of the Issuer will be achieved. You should not subscribe to purchase interests in the Issuer unless you can readily bear the consequences of such loss.
Interests in the Issuer are listed on the Envest Marketplace. Envest receives fees from the Sponsor or the investment vehicle partially based on the number of investor rooms created. This arrangement could create a conflict of interest between CrowdStreet and investors.
Certain Envest employees may have an interest in, or family members or close friends of Envest employees may have an interest in, or employment or other relationship with, the Issuer or one of its affiliates. Although Envest has a thorough screening process with respect to each investment opportunity, the fact that Envest employees may have an interest in, or may have family members or close friends with an interest in, or employment or other relationship with, the Issuer or one of its affiliates could create an incentive for Envest to approve the Issuer for the Marketplace.
`,
    },
    images: {
      get large() {return this.card},
      card: getImgPath(`e3xternal-content.duckduckgo.com.jpg`),
    },
  },
  {
    id: 3,
    sponsor: '123 Corp',
    title: 'Solar farm in Australia 3',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 1298,
      capacityKWh: 1298,
      ppaTerm: 0,
      ppaPriceUSD: 212,
    },
    financials: {
      otherClass: 'Hybrid Debt Refinancing',
      instrument: 'debt',
      investmentClass: 'Preferred Stock',
      expectedReturn: 26300000,
      fundTarget: 22300000,
      amtFunded: 1000000,
      principalOutstanding: 0.0112,
      interestAccrued: 0.0103,
      ppaCounterparty: 'counterparty 3',
      annualInterest: '0.097',
      term: {
        length: 4*365*24*60*60*1000,
        get startDt() {return 1612291996043 || this.dt.financials.term.stopDt - this.dt.financials.term.length},
        get stopDt() {return this.dt.financials.term.startDt + this.dt.financials.term.length},
      },
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {title: `Shareholder's Agreement` , filePath: 'shareholder-agreement.pdf' , type: 'doctype1'},
        {title: `Power Purhcase Agreement`, filePath: 'ppa.pdf'                   , type: 'doctype2'},
        {title: `Land Lease`              , filePath: 'land-lease.pdf'            , type: 'doctype3'},
        {title: `Connection Agreement`    , filePath: 'connection-agreement.pdf'  , type: 'doctype4'},
      ],
    },
    dtListed: 1641691996043,
    get dtInvestmentTermStart() {return this.dtListed + 2.2*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 45*24*60*60*1000},
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'Australia',
        stateProvince: 'NSW',
        city: 'Sydney',
        street: 'Melbourne St',
        buildingNumber: '5',
        apartment: '',
      },
    },
    content: {
      about: `\tInvest indirectly in a mezzanine loan secured by a 11 MwH wind farm in Buffalo, New York. This is a project finance opportunity which is expected to be commercially operational in four years. The minimum investment amount is $15,000.`,
      investment: `Investment

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas diam. Erat nam at lectus urna duis convallis convallis tellus. Augue interdum velit euismod in pellentesque massa. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim ut tellus elementum sagittis vitae. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Gravida arcu ac tortor dignissim convallis aenean. Vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim convallis aenean et tortor. Ultrices in iaculis nunc sed augue. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lectus quam id leo in vitae turpis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Orci dapibus ultrices in iaculis nunc sed. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Et tortor at risus viverra adipiscing at. Fames ac turpis egestas maecenas pharetra convallis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.

Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. Sit amet purus gravida quis blandit turpis. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam quis enim. Ut diam quam nulla porttitor massa id neque aliquam. Augue mauris augue neque gravida in fermentum et sollicitudin. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nunc id cursus metus aliquam.

Project

Habitasse platea dictumst quisque sagittis. Eu lobortis elementum nibh tellus molestie nunc. Dictum fusce ut placerat orci nulla pellentesque. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Integer vitae justo eget magna. Id diam maecenas ultricies mi eget mauris. Ut diam quam nulla porttitor. Euismod lacinia at quis risus sed vulputate odio ut enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut.

Business Plan

Orci a scelerisque purus semper eget duis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Urna cursus eget nunc scelerisque viverra mauris in. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Interdum posuere lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam ultrices sagittis orci a scelerisque. Varius quam quisque id diam. Et netus et malesuada fames ac. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Faucibus purus in massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum. Iaculis at erat pellentesque adipiscing. Praesent semper feugiat nibh sed. Amet aliquam id diam maecenas ultricies mi eget. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Proin gravida hendrerit lectus a. Nulla facilisi cras fermentum odio.

Eros in cursus turpis massa tincidunt dui ut. Iaculis nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae justo. Non consectetur a erat nam at lectus urna duis. Senectus et netus et malesuada fames. Elit pellentesque habitant morbi tristique senectus et. Nullam ac tortor vitae purus faucibus. Pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis. Nisi scelerisque eu ultrices vitae auctor eu. Sit amet justo donec enim diam vulputate. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue. Vestibulum mattis ullamcorper velit sed. Egestas diam in arcu cursus. Enim sit amet venenatis urna cursus. Consectetur a erat nam at. Luctus accumsan tortor posuere ac ut consequat.

Lacus sed viverra tellus in hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat blandit aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Quis viverra nibh cras pulvinar mattis nunc. Fringilla ut morbi tincidunt augue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Leo integer malesuada nunc vel. Eu sem integer vitae justo eget magna fermentum iaculis. Gravida quis blandit turpis cursus in hac. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In hac habitasse platea dictumst quisque sagittis purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Commodo sed egestas egestas fringilla phasellus. Donec enim diam vulputate ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cras sed felis eget velit aliquet sagittis id consectetur.

Capital Stack and Investor Returns

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. 

[Capital Stack Graphic]

[Table]

Development Timeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. Ac turpis egestas maecenas pharetra. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Ultricies mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque. Consequat nisl vel pretium lectus quam id leo. Ridiculus mus mauris vitae ultricies leo. Mauris in aliquam sem fringilla ut morbi.

Expenses and Fees

[Table]

Site Plan

[Project Blueprint]

`,
      sponsor: `Sponsor

  Overview
  
  [Sponsor Name] was formed by [Team Member #1], [Team Member #2], and [Team Member #3], who teamed up in [year] to develop [wind/solar/battery/infrastructure] in the [region] area, a market they believed was underserved. Prior to [year] , [fake story about what they did in business before]. Since then, [Sponsor Name] and its affiliated entities have formed joint ventures with prominent publicly traded [companies], institutional private equity groups and family offices to become one of the most prolific developers of [wind/solar/battery/infrastructure] in [region]. Currently, the Sponsor is increasing the size of its [region] portfolio.
  
  Since [year], the Sponsor and its affiliates have completed the construction and development of [number] sites in [region], of which two sites have since been sold to a national publicly-traded REIT. SNL and its affiliates currently own ten operating self-storage facilities in New York City, totaling approximately [number/MwH] of renewable energy. Each of the facilities was sourced, developed and constructed by the [Sponsor]. These facilities are located at:
  
  [list of operational projects]
  
  Additionally, the Sponsor and its affiliates are expecting to complete in 2021, the development of [number] additional projects aggregating approximately [number/MwH], and have another [number] additional projects either under construction or in its development pipeline. The Sponsor expects that at the end of 2021, it and its affiliates will have approximately [number/MwH] of energy production under management.
  
  
  Leadership Team
  
  Team Member #1
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #2
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #3
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
      `,
      disclaimer: `
      Disclaimer

The content on this detail page was produced by the Sponsor or an affiliate thereof. The Sponsor is under no obligation to update this detail page. None of the opinions expressed on this detail page are the opinions of Envest and they are not endorsed by Envest. Assumptions and projections included in this detail page are not reflective of the position of Envest or any other person or entity other than [Sponsor Name], a Delaware limited liability company (the “Issuer”) or its affiliates.
The preceding summary of principal terms of the offering is qualified in its entirety by reference to the more complete information about the offering contained in the offering documents, including, without limitation, the Confidential Private Placement Memorandum of the Issuer dated February 2021, the Amended and Restated Operating Agreement of the Issuer, Subscription Agreement for Class B Units of the Issuer, and all exhibits and other documents attached thereto or referenced therein (collectively, the "Investment Documents"). This summary is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment. In the event of an inconsistency between the preceding summary and the Investment Documents, investors should rely on the content of the Investment Documents.
There can be no assurance that the methodology used for calculating targeted IRR is appropriate or adequate. Target IRR is presented solely for the purpose of providing insight into the Issuer’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Issuer’s performance. Targeted IRR is not a predictor, projection or guarantee of future performance. There can be no assurance that the Issuer’s targets will be met or that the Issuer will be successful in identifying and investing in investment opportunities that would allow the Issuer to meet these return parameters. Target returns should not be used as a primary basis for an investor’s decision to invest in the Issuer. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.
All forward–looking statements attributable to the Sponsor or persons acting on its behalf apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in this summary and the Investment Documents. Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward–looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events. Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.
The interests in the Issuer will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon exemptions contained in Rule 506(c) of Regulation D as promulgated under the Securities Act. In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration. Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
All investing activities risk the loss of capital. There can be no assurance that investors will not suffer significant losses. No guarantee or representation is made that investment objectives of the Issuer will be achieved. You should not subscribe to purchase interests in the Issuer unless you can readily bear the consequences of such loss.
Interests in the Issuer are listed on the Envest Marketplace. Envest receives fees from the Sponsor or the investment vehicle partially based on the number of investor rooms created. This arrangement could create a conflict of interest between CrowdStreet and investors.
Certain Envest employees may have an interest in, or family members or close friends of Envest employees may have an interest in, or employment or other relationship with, the Issuer or one of its affiliates. Although Envest has a thorough screening process with respect to each investment opportunity, the fact that Envest employees may have an interest in, or may have family members or close friends with an interest in, or employment or other relationship with, the Issuer or one of its affiliates could create an incentive for Envest to approve the Issuer for the Marketplace.
`,
    },
    images: {
      get large() {return this.card},
      card: getImgPath(`1980_schwinn_air_dyne_ergometric_exerciser.png`),
    },
  },
  {
    id: 4,
    sponsor: 'NP Fuel',
    title: 'Biomass converter in New Jersey 4',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 200,
      capacityKWh: 200,
      ppaTerm: 0,
      ppaPriceUSD: 73,
    },
    financials: {
      otherClass: 'Equity Venture Capital',
      instrument: 'debt',
      investmentClass: 'Subordinate Debt',
      expectedReturn: 53330000,
      fundTarget: 33330000,
      amtFunded: 33330000,
      principalOutstanding: 0.091,
      interestAccrued: 0.074,
      ppaCounterparty: 'counterparty 8',
      annualInterest: '0.097',
      term: {
        length: 4*365*24*60*60*1000,
        get startDt() {return 1612291996043 || this.dt.financials.term.stopDt - this.dt.financials.term.length},
        get stopDt() {return this.dt.financials.term.startDt + this.dt.financials.term.length},
      },
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {title: `Shareholder's Agreement` , filePath: 'shareholder-agreement.pdf' , type: 'doctype1'},
        {title: `Power Purhcase Agreement`, filePath: 'ppa.pdf'                   , type: 'doctype2'},
        {title: `Land Lease`              , filePath: 'land-lease.pdf'            , type: 'doctype3'},
        {title: `Connection Agreement`    , filePath: 'connection-agreement.pdf'  , type: 'doctype4'},
      ],
    },
    dtListed: 1621691996043,
    get dtInvestmentTermStart() {return this.dtListed + 1.1*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 90*24*60*60*1000},
    location: {
      coordinates: {lat: 7.1010101, lon: 4.1049293},
      address: {
        country: 'USA',
        stateProvince: 'NJ',
        city: 'Patterson',
        street: 'Main St.',
        buildingNumber: '8',
        apartment: '',
      },
    },
    content: {
      about: `\tInvest indirectly in a mezzanine loan secured by a 11 MwH wind farm in Buffalo, New York. This is a project finance opportunity which is expected to be commercially operational in four years. The minimum investment amount is $15,000.`,
      investment: `Investment

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas diam. Erat nam at lectus urna duis convallis convallis tellus. Augue interdum velit euismod in pellentesque massa. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim ut tellus elementum sagittis vitae. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Gravida arcu ac tortor dignissim convallis aenean. Vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim convallis aenean et tortor. Ultrices in iaculis nunc sed augue. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lectus quam id leo in vitae turpis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Orci dapibus ultrices in iaculis nunc sed. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Et tortor at risus viverra adipiscing at. Fames ac turpis egestas maecenas pharetra convallis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.

Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. Sit amet purus gravida quis blandit turpis. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam quis enim. Ut diam quam nulla porttitor massa id neque aliquam. Augue mauris augue neque gravida in fermentum et sollicitudin. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nunc id cursus metus aliquam.

Project

Habitasse platea dictumst quisque sagittis. Eu lobortis elementum nibh tellus molestie nunc. Dictum fusce ut placerat orci nulla pellentesque. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Integer vitae justo eget magna. Id diam maecenas ultricies mi eget mauris. Ut diam quam nulla porttitor. Euismod lacinia at quis risus sed vulputate odio ut enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut.

Business Plan

Orci a scelerisque purus semper eget duis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Urna cursus eget nunc scelerisque viverra mauris in. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Interdum posuere lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam ultrices sagittis orci a scelerisque. Varius quam quisque id diam. Et netus et malesuada fames ac. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Faucibus purus in massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum. Iaculis at erat pellentesque adipiscing. Praesent semper feugiat nibh sed. Amet aliquam id diam maecenas ultricies mi eget. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Proin gravida hendrerit lectus a. Nulla facilisi cras fermentum odio.

Eros in cursus turpis massa tincidunt dui ut. Iaculis nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae justo. Non consectetur a erat nam at lectus urna duis. Senectus et netus et malesuada fames. Elit pellentesque habitant morbi tristique senectus et. Nullam ac tortor vitae purus faucibus. Pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis. Nisi scelerisque eu ultrices vitae auctor eu. Sit amet justo donec enim diam vulputate. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue. Vestibulum mattis ullamcorper velit sed. Egestas diam in arcu cursus. Enim sit amet venenatis urna cursus. Consectetur a erat nam at. Luctus accumsan tortor posuere ac ut consequat.

Lacus sed viverra tellus in hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat blandit aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Quis viverra nibh cras pulvinar mattis nunc. Fringilla ut morbi tincidunt augue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Leo integer malesuada nunc vel. Eu sem integer vitae justo eget magna fermentum iaculis. Gravida quis blandit turpis cursus in hac. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In hac habitasse platea dictumst quisque sagittis purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Commodo sed egestas egestas fringilla phasellus. Donec enim diam vulputate ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cras sed felis eget velit aliquet sagittis id consectetur.

Capital Stack and Investor Returns

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. 

[Capital Stack Graphic]

[Table]

Development Timeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. Ac turpis egestas maecenas pharetra. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Ultricies mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque. Consequat nisl vel pretium lectus quam id leo. Ridiculus mus mauris vitae ultricies leo. Mauris in aliquam sem fringilla ut morbi.

Expenses and Fees

[Table]

Site Plan

[Project Blueprint]

`,
      sponsor: `Sponsor

  Overview
  
  [Sponsor Name] was formed by [Team Member #1], [Team Member #2], and [Team Member #3], who teamed up in [year] to develop [wind/solar/battery/infrastructure] in the [region] area, a market they believed was underserved. Prior to [year] , [fake story about what they did in business before]. Since then, [Sponsor Name] and its affiliated entities have formed joint ventures with prominent publicly traded [companies], institutional private equity groups and family offices to become one of the most prolific developers of [wind/solar/battery/infrastructure] in [region]. Currently, the Sponsor is increasing the size of its [region] portfolio.
  
  Since [year], the Sponsor and its affiliates have completed the construction and development of [number] sites in [region], of which two sites have since been sold to a national publicly-traded REIT. SNL and its affiliates currently own ten operating self-storage facilities in New York City, totaling approximately [number/MwH] of renewable energy. Each of the facilities was sourced, developed and constructed by the [Sponsor]. These facilities are located at:
  
  [list of operational projects]
  
  Additionally, the Sponsor and its affiliates are expecting to complete in 2021, the development of [number] additional projects aggregating approximately [number/MwH], and have another [number] additional projects either under construction or in its development pipeline. The Sponsor expects that at the end of 2021, it and its affiliates will have approximately [number/MwH] of energy production under management.
  
  
  Leadership Team
  
  Team Member #1
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #2
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #3
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
      `,
      disclaimer: `
      Disclaimer

The content on this detail page was produced by the Sponsor or an affiliate thereof. The Sponsor is under no obligation to update this detail page. None of the opinions expressed on this detail page are the opinions of Envest and they are not endorsed by Envest. Assumptions and projections included in this detail page are not reflective of the position of Envest or any other person or entity other than [Sponsor Name], a Delaware limited liability company (the “Issuer”) or its affiliates.
The preceding summary of principal terms of the offering is qualified in its entirety by reference to the more complete information about the offering contained in the offering documents, including, without limitation, the Confidential Private Placement Memorandum of the Issuer dated February 2021, the Amended and Restated Operating Agreement of the Issuer, Subscription Agreement for Class B Units of the Issuer, and all exhibits and other documents attached thereto or referenced therein (collectively, the "Investment Documents"). This summary is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment. In the event of an inconsistency between the preceding summary and the Investment Documents, investors should rely on the content of the Investment Documents.
There can be no assurance that the methodology used for calculating targeted IRR is appropriate or adequate. Target IRR is presented solely for the purpose of providing insight into the Issuer’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Issuer’s performance. Targeted IRR is not a predictor, projection or guarantee of future performance. There can be no assurance that the Issuer’s targets will be met or that the Issuer will be successful in identifying and investing in investment opportunities that would allow the Issuer to meet these return parameters. Target returns should not be used as a primary basis for an investor’s decision to invest in the Issuer. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.
All forward–looking statements attributable to the Sponsor or persons acting on its behalf apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in this summary and the Investment Documents. Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward–looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events. Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.
The interests in the Issuer will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon exemptions contained in Rule 506(c) of Regulation D as promulgated under the Securities Act. In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration. Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
All investing activities risk the loss of capital. There can be no assurance that investors will not suffer significant losses. No guarantee or representation is made that investment objectives of the Issuer will be achieved. You should not subscribe to purchase interests in the Issuer unless you can readily bear the consequences of such loss.
Interests in the Issuer are listed on the Envest Marketplace. Envest receives fees from the Sponsor or the investment vehicle partially based on the number of investor rooms created. This arrangement could create a conflict of interest between CrowdStreet and investors.
Certain Envest employees may have an interest in, or family members or close friends of Envest employees may have an interest in, or employment or other relationship with, the Issuer or one of its affiliates. Although Envest has a thorough screening process with respect to each investment opportunity, the fact that Envest employees may have an interest in, or may have family members or close friends with an interest in, or employment or other relationship with, the Issuer or one of its affiliates could create an incentive for Envest to approve the Issuer for the Marketplace.
`,
    },
    images: {
      get large() {return this.card},
      card: getImgPath(`external-content.duckduckgo.com.jpg`),
    },
  },
  {
    id: 5,
    sponsor: 'ABC Corp',
    title: 'Wind farm in Oklahoma 5',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 800,
      capacityKWh: 800,
      ppaTerm: 0,
      ppaPriceUSD: 1232,
    },
    financials: {
      otherClass: 'Preferred Equity Offloading',
      instrument: 'debt',
      investmentClass: 'Common Stock',
      expectedReturn: 1900000,
      fundTarget: 1500000,
      amtFunded: 1200000,
      principalOutstanding: 0.881,
      interestAccrued: 0.0121,
      ppaCounterparty: 'counterparty 4',
      annualInterest: '0.097',
      term: {
        length: 4*365*24*60*60*1000,
        get startDt() {return 1612291996043 || this.dt.financials.term.stopDt - this.dt.financials.term.length},
        get stopDt() {return this.dt.financials.term.startDt + this.dt.financials.term.length},
      },
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {title: `Shareholder's Agreement` , filePath: 'shareholder-agreement.pdf' , type: 'doctype1'},
        {title: `Power Purhcase Agreement`, filePath: 'ppa.pdf'                   , type: 'doctype2'},
        {title: `Land Lease`              , filePath: 'land-lease.pdf'            , type: 'doctype3'},
        {title: `Connection Agreement`    , filePath: 'connection-agreement.pdf'  , type: 'doctype4'},
      ],
    },
    dtListed: 1612291996043,
    get dtInvestmentTermStart() {return this.dtListed + 5.3*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 380*24*60*60*1000},
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'USA',
        stateProvince: 'Oklahoma',
        city: 'Tulsa',
        street: 'Main',
        buildingNumber: '123',
        apartment: '',
      },
    },
    content: {
      about: `\tInvest indirectly in a mezzanine loan secured by a 11 MwH wind farm in Buffalo, New York. This is a project finance opportunity which is expected to be commercially operational in four years. The minimum investment amount is $15,000.`,
      investment: `Investment

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas diam. Erat nam at lectus urna duis convallis convallis tellus. Augue interdum velit euismod in pellentesque massa. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim ut tellus elementum sagittis vitae. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Gravida arcu ac tortor dignissim convallis aenean. Vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim convallis aenean et tortor. Ultrices in iaculis nunc sed augue. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lectus quam id leo in vitae turpis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Orci dapibus ultrices in iaculis nunc sed. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Et tortor at risus viverra adipiscing at. Fames ac turpis egestas maecenas pharetra convallis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.

Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. Sit amet purus gravida quis blandit turpis. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam quis enim. Ut diam quam nulla porttitor massa id neque aliquam. Augue mauris augue neque gravida in fermentum et sollicitudin. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nunc id cursus metus aliquam.

Project

Habitasse platea dictumst quisque sagittis. Eu lobortis elementum nibh tellus molestie nunc. Dictum fusce ut placerat orci nulla pellentesque. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Integer vitae justo eget magna. Id diam maecenas ultricies mi eget mauris. Ut diam quam nulla porttitor. Euismod lacinia at quis risus sed vulputate odio ut enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut.

Business Plan

Orci a scelerisque purus semper eget duis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Urna cursus eget nunc scelerisque viverra mauris in. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Interdum posuere lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam ultrices sagittis orci a scelerisque. Varius quam quisque id diam. Et netus et malesuada fames ac. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Faucibus purus in massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum. Iaculis at erat pellentesque adipiscing. Praesent semper feugiat nibh sed. Amet aliquam id diam maecenas ultricies mi eget. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Proin gravida hendrerit lectus a. Nulla facilisi cras fermentum odio.

Eros in cursus turpis massa tincidunt dui ut. Iaculis nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae justo. Non consectetur a erat nam at lectus urna duis. Senectus et netus et malesuada fames. Elit pellentesque habitant morbi tristique senectus et. Nullam ac tortor vitae purus faucibus. Pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis. Nisi scelerisque eu ultrices vitae auctor eu. Sit amet justo donec enim diam vulputate. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue. Vestibulum mattis ullamcorper velit sed. Egestas diam in arcu cursus. Enim sit amet venenatis urna cursus. Consectetur a erat nam at. Luctus accumsan tortor posuere ac ut consequat.

Lacus sed viverra tellus in hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat blandit aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Quis viverra nibh cras pulvinar mattis nunc. Fringilla ut morbi tincidunt augue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Leo integer malesuada nunc vel. Eu sem integer vitae justo eget magna fermentum iaculis. Gravida quis blandit turpis cursus in hac. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In hac habitasse platea dictumst quisque sagittis purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Commodo sed egestas egestas fringilla phasellus. Donec enim diam vulputate ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cras sed felis eget velit aliquet sagittis id consectetur.

Capital Stack and Investor Returns

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. 

[Capital Stack Graphic]

[Table]

Development Timeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. Ac turpis egestas maecenas pharetra. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Ultricies mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque. Consequat nisl vel pretium lectus quam id leo. Ridiculus mus mauris vitae ultricies leo. Mauris in aliquam sem fringilla ut morbi.

Expenses and Fees

[Table]

Site Plan

[Project Blueprint]

`,
      sponsor: `Sponsor

  Overview
  
  [Sponsor Name] was formed by [Team Member #1], [Team Member #2], and [Team Member #3], who teamed up in [year] to develop [wind/solar/battery/infrastructure] in the [region] area, a market they believed was underserved. Prior to [year] , [fake story about what they did in business before]. Since then, [Sponsor Name] and its affiliated entities have formed joint ventures with prominent publicly traded [companies], institutional private equity groups and family offices to become one of the most prolific developers of [wind/solar/battery/infrastructure] in [region]. Currently, the Sponsor is increasing the size of its [region] portfolio.
  
  Since [year], the Sponsor and its affiliates have completed the construction and development of [number] sites in [region], of which two sites have since been sold to a national publicly-traded REIT. SNL and its affiliates currently own ten operating self-storage facilities in New York City, totaling approximately [number/MwH] of renewable energy. Each of the facilities was sourced, developed and constructed by the [Sponsor]. These facilities are located at:
  
  [list of operational projects]
  
  Additionally, the Sponsor and its affiliates are expecting to complete in 2021, the development of [number] additional projects aggregating approximately [number/MwH], and have another [number] additional projects either under construction or in its development pipeline. The Sponsor expects that at the end of 2021, it and its affiliates will have approximately [number/MwH] of energy production under management.
  
  
  Leadership Team
  
  Team Member #1
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #2
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #3
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
      `,
      disclaimer: `
      Disclaimer

The content on this detail page was produced by the Sponsor or an affiliate thereof. The Sponsor is under no obligation to update this detail page. None of the opinions expressed on this detail page are the opinions of Envest and they are not endorsed by Envest. Assumptions and projections included in this detail page are not reflective of the position of Envest or any other person or entity other than [Sponsor Name], a Delaware limited liability company (the “Issuer”) or its affiliates.
The preceding summary of principal terms of the offering is qualified in its entirety by reference to the more complete information about the offering contained in the offering documents, including, without limitation, the Confidential Private Placement Memorandum of the Issuer dated February 2021, the Amended and Restated Operating Agreement of the Issuer, Subscription Agreement for Class B Units of the Issuer, and all exhibits and other documents attached thereto or referenced therein (collectively, the "Investment Documents"). This summary is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment. In the event of an inconsistency between the preceding summary and the Investment Documents, investors should rely on the content of the Investment Documents.
There can be no assurance that the methodology used for calculating targeted IRR is appropriate or adequate. Target IRR is presented solely for the purpose of providing insight into the Issuer’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Issuer’s performance. Targeted IRR is not a predictor, projection or guarantee of future performance. There can be no assurance that the Issuer’s targets will be met or that the Issuer will be successful in identifying and investing in investment opportunities that would allow the Issuer to meet these return parameters. Target returns should not be used as a primary basis for an investor’s decision to invest in the Issuer. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.
All forward–looking statements attributable to the Sponsor or persons acting on its behalf apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in this summary and the Investment Documents. Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward–looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events. Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.
The interests in the Issuer will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon exemptions contained in Rule 506(c) of Regulation D as promulgated under the Securities Act. In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration. Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
All investing activities risk the loss of capital. There can be no assurance that investors will not suffer significant losses. No guarantee or representation is made that investment objectives of the Issuer will be achieved. You should not subscribe to purchase interests in the Issuer unless you can readily bear the consequences of such loss.
Interests in the Issuer are listed on the Envest Marketplace. Envest receives fees from the Sponsor or the investment vehicle partially based on the number of investor rooms created. This arrangement could create a conflict of interest between CrowdStreet and investors.
Certain Envest employees may have an interest in, or family members or close friends of Envest employees may have an interest in, or employment or other relationship with, the Issuer or one of its affiliates. Although Envest has a thorough screening process with respect to each investment opportunity, the fact that Envest employees may have an interest in, or may have family members or close friends with an interest in, or employment or other relationship with, the Issuer or one of its affiliates could create an incentive for Envest to approve the Issuer for the Marketplace.
`,
    },
    images: {
      get large() {return this.card},
      card: getImgPath(`external-content2.duckduckgo.com.jpg`),
    },
  },
  {
    id: 6,
    sponsor: 'Greenbacker Capital',
    title: 'Hydroelectric Dam 6',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 54,
      capacityKWh: 54,
      ppaTerm: 0,
      ppaPriceUSD: 192,
    },
    financials: {
      otherClass: 'Common Equity Project Finance',
      instrument: 'debt',
      investmentClass: 'Preferred Stock',
      expectedReturn: 970000,
      fundTarget: 900000,
      amtFunded: 200000,
      principalOutstanding: 0.0101,
      interestAccrued: 0.0034,
      ppaCounterparty: 'counterparty 5',
      annualInterest: '0.097',
      term: {
        length: 4*365*24*60*60*1000,
        get startDt() {return 1612291996043 || this.dt.financials.term.stopDt - this.dt.financials.term.length},
        get stopDt() {return this.dt.financials.term.startDt + this.dt.financials.term.length},
      },
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {title: `Shareholder's Agreement` , filePath: 'shareholder-agreement.pdf' , type: 'doctype1'},
        {title: `Power Purhcase Agreement`, filePath: 'ppa.pdf'                   , type: 'doctype2'},
        {title: `Land Lease`              , filePath: 'land-lease.pdf'            , type: 'doctype3'},
        {title: `Connection Agreement`    , filePath: 'connection-agreement.pdf'  , type: 'doctype4'},
      ],
    },
    dtListed: 1610671996043,
    get dtInvestmentTermStart() {return this.dtListed + 3.3*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 181*24*60*60*1000},
    location: {
      coordinates: {lat: 2.1010101, lon: -1.1049293},
      address: {
        country: 'USA',
        stateProvince: 'Kansas',
        city: 'Kansas City',
        street: 'Broad St.',
        buildingNumber: '123',
        apartment: '',
      },
    },
    content: {
      about: `\tInvest indirectly in a mezzanine loan secured by a 11 MwH wind farm in Buffalo, New York. This is a project finance opportunity which is expected to be commercially operational in four years. The minimum investment amount is $15,000.`,
      investment: `Investment

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas diam. Erat nam at lectus urna duis convallis convallis tellus. Augue interdum velit euismod in pellentesque massa. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim ut tellus elementum sagittis vitae. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Gravida arcu ac tortor dignissim convallis aenean. Vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim convallis aenean et tortor. Ultrices in iaculis nunc sed augue. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lectus quam id leo in vitae turpis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Orci dapibus ultrices in iaculis nunc sed. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Et tortor at risus viverra adipiscing at. Fames ac turpis egestas maecenas pharetra convallis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.

Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. Sit amet purus gravida quis blandit turpis. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam quis enim. Ut diam quam nulla porttitor massa id neque aliquam. Augue mauris augue neque gravida in fermentum et sollicitudin. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nunc id cursus metus aliquam.

Project

Habitasse platea dictumst quisque sagittis. Eu lobortis elementum nibh tellus molestie nunc. Dictum fusce ut placerat orci nulla pellentesque. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Integer vitae justo eget magna. Id diam maecenas ultricies mi eget mauris. Ut diam quam nulla porttitor. Euismod lacinia at quis risus sed vulputate odio ut enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut.

Business Plan

Orci a scelerisque purus semper eget duis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Urna cursus eget nunc scelerisque viverra mauris in. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Interdum posuere lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam ultrices sagittis orci a scelerisque. Varius quam quisque id diam. Et netus et malesuada fames ac. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Faucibus purus in massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum. Iaculis at erat pellentesque adipiscing. Praesent semper feugiat nibh sed. Amet aliquam id diam maecenas ultricies mi eget. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Proin gravida hendrerit lectus a. Nulla facilisi cras fermentum odio.

Eros in cursus turpis massa tincidunt dui ut. Iaculis nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae justo. Non consectetur a erat nam at lectus urna duis. Senectus et netus et malesuada fames. Elit pellentesque habitant morbi tristique senectus et. Nullam ac tortor vitae purus faucibus. Pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis. Nisi scelerisque eu ultrices vitae auctor eu. Sit amet justo donec enim diam vulputate. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue. Vestibulum mattis ullamcorper velit sed. Egestas diam in arcu cursus. Enim sit amet venenatis urna cursus. Consectetur a erat nam at. Luctus accumsan tortor posuere ac ut consequat.

Lacus sed viverra tellus in hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat blandit aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Quis viverra nibh cras pulvinar mattis nunc. Fringilla ut morbi tincidunt augue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Leo integer malesuada nunc vel. Eu sem integer vitae justo eget magna fermentum iaculis. Gravida quis blandit turpis cursus in hac. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In hac habitasse platea dictumst quisque sagittis purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Commodo sed egestas egestas fringilla phasellus. Donec enim diam vulputate ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cras sed felis eget velit aliquet sagittis id consectetur.

Capital Stack and Investor Returns

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. 

[Capital Stack Graphic]

[Table]

Development Timeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. Ac turpis egestas maecenas pharetra. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Ultricies mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque. Consequat nisl vel pretium lectus quam id leo. Ridiculus mus mauris vitae ultricies leo. Mauris in aliquam sem fringilla ut morbi.

Expenses and Fees

[Table]

Site Plan

[Project Blueprint]

`,
      sponsor: `Sponsor

  Overview
  
  [Sponsor Name] was formed by [Team Member #1], [Team Member #2], and [Team Member #3], who teamed up in [year] to develop [wind/solar/battery/infrastructure] in the [region] area, a market they believed was underserved. Prior to [year] , [fake story about what they did in business before]. Since then, [Sponsor Name] and its affiliated entities have formed joint ventures with prominent publicly traded [companies], institutional private equity groups and family offices to become one of the most prolific developers of [wind/solar/battery/infrastructure] in [region]. Currently, the Sponsor is increasing the size of its [region] portfolio.
  
  Since [year], the Sponsor and its affiliates have completed the construction and development of [number] sites in [region], of which two sites have since been sold to a national publicly-traded REIT. SNL and its affiliates currently own ten operating self-storage facilities in New York City, totaling approximately [number/MwH] of renewable energy. Each of the facilities was sourced, developed and constructed by the [Sponsor]. These facilities are located at:
  
  [list of operational projects]
  
  Additionally, the Sponsor and its affiliates are expecting to complete in 2021, the development of [number] additional projects aggregating approximately [number/MwH], and have another [number] additional projects either under construction or in its development pipeline. The Sponsor expects that at the end of 2021, it and its affiliates will have approximately [number/MwH] of energy production under management.
  
  
  Leadership Team
  
  Team Member #1
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #2
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #3
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
      `,
      disclaimer: `
      Disclaimer

The content on this detail page was produced by the Sponsor or an affiliate thereof. The Sponsor is under no obligation to update this detail page. None of the opinions expressed on this detail page are the opinions of Envest and they are not endorsed by Envest. Assumptions and projections included in this detail page are not reflective of the position of Envest or any other person or entity other than [Sponsor Name], a Delaware limited liability company (the “Issuer”) or its affiliates.
The preceding summary of principal terms of the offering is qualified in its entirety by reference to the more complete information about the offering contained in the offering documents, including, without limitation, the Confidential Private Placement Memorandum of the Issuer dated February 2021, the Amended and Restated Operating Agreement of the Issuer, Subscription Agreement for Class B Units of the Issuer, and all exhibits and other documents attached thereto or referenced therein (collectively, the "Investment Documents"). This summary is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment. In the event of an inconsistency between the preceding summary and the Investment Documents, investors should rely on the content of the Investment Documents.
There can be no assurance that the methodology used for calculating targeted IRR is appropriate or adequate. Target IRR is presented solely for the purpose of providing insight into the Issuer’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Issuer’s performance. Targeted IRR is not a predictor, projection or guarantee of future performance. There can be no assurance that the Issuer’s targets will be met or that the Issuer will be successful in identifying and investing in investment opportunities that would allow the Issuer to meet these return parameters. Target returns should not be used as a primary basis for an investor’s decision to invest in the Issuer. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.
All forward–looking statements attributable to the Sponsor or persons acting on its behalf apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in this summary and the Investment Documents. Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward–looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events. Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.
The interests in the Issuer will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon exemptions contained in Rule 506(c) of Regulation D as promulgated under the Securities Act. In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration. Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
All investing activities risk the loss of capital. There can be no assurance that investors will not suffer significant losses. No guarantee or representation is made that investment objectives of the Issuer will be achieved. You should not subscribe to purchase interests in the Issuer unless you can readily bear the consequences of such loss.
Interests in the Issuer are listed on the Envest Marketplace. Envest receives fees from the Sponsor or the investment vehicle partially based on the number of investor rooms created. This arrangement could create a conflict of interest between CrowdStreet and investors.
Certain Envest employees may have an interest in, or family members or close friends of Envest employees may have an interest in, or employment or other relationship with, the Issuer or one of its affiliates. Although Envest has a thorough screening process with respect to each investment opportunity, the fact that Envest employees may have an interest in, or may have family members or close friends with an interest in, or employment or other relationship with, the Issuer or one of its affiliates could create an incentive for Envest to approve the Issuer for the Marketplace.
`,
    },
    images: {
      get large() {return this.card},
      card: getImgPath(`external-content5.duckduckgo.com.jpg`),
    },
  },
  {
    id: 7,
    sponsor: '123 Corp',
    title: 'Solar farm in Australia 7',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 33,
      capacityKWh: 33,
      ppaTerm: 0,
      ppaPriceUSD: 500,
    },
    financials: {
      otherClass: 'Common Equity Offloading',
      instrument: 'debt',
      investmentClass: 'Common Stock',
      expectedReturn: 24300000,
      fundTarget: 22300000,
      amtFunded: 2300000,
      principalOutstanding: 0.0131,
      interestAccrued: 0.0111,
      ppaCounterparty: 'counterparty 6',
      annualInterest: '0.097',
      term: {
        length: 4*365*24*60*60*1000,
        get startDt() {return 1612291996043 || this.dt.financials.term.stopDt - this.dt.financials.term.length},
        get stopDt() {return this.dt.financials.term.startDt + this.dt.financials.term.length},
      },
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {title: `Shareholder's Agreement` , filePath: 'shareholder-agreement.pdf' , type: 'doctype1'},
        {title: `Power Purhcase Agreement`, filePath: 'ppa.pdf'                   , type: 'doctype2'},
        {title: `Land Lease`              , filePath: 'land-lease.pdf'            , type: 'doctype3'},
        {title: `Connection Agreement`    , filePath: 'connection-agreement.pdf'  , type: 'doctype4'},
      ],
    },
    dtListed: 1641691996043,
    get dtInvestmentTermStart() {return this.dtListed + 2.2*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 45*24*60*60*1000},
    location: {
      coordinates: {lat: 0.1010101, lon: 1.1049293},
      address: {
        country: 'Australia',
        stateProvince: 'NSW',
        city: 'Sydney',
        street: 'Melbourne St',
        buildingNumber: '5',
        apartment: '',
      },
    },
    content: {
      about: `\tInvest indirectly in a mezzanine loan secured by a 11 MwH wind farm in Buffalo, New York. This is a project finance opportunity which is expected to be commercially operational in four years. The minimum investment amount is $15,000.`,
      investment: `Investment

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas diam. Erat nam at lectus urna duis convallis convallis tellus. Augue interdum velit euismod in pellentesque massa. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim ut tellus elementum sagittis vitae. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Gravida arcu ac tortor dignissim convallis aenean. Vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim convallis aenean et tortor. Ultrices in iaculis nunc sed augue. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lectus quam id leo in vitae turpis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Orci dapibus ultrices in iaculis nunc sed. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Et tortor at risus viverra adipiscing at. Fames ac turpis egestas maecenas pharetra convallis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.

Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. Sit amet purus gravida quis blandit turpis. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam quis enim. Ut diam quam nulla porttitor massa id neque aliquam. Augue mauris augue neque gravida in fermentum et sollicitudin. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nunc id cursus metus aliquam.

Project

Habitasse platea dictumst quisque sagittis. Eu lobortis elementum nibh tellus molestie nunc. Dictum fusce ut placerat orci nulla pellentesque. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Integer vitae justo eget magna. Id diam maecenas ultricies mi eget mauris. Ut diam quam nulla porttitor. Euismod lacinia at quis risus sed vulputate odio ut enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut.

Business Plan

Orci a scelerisque purus semper eget duis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Urna cursus eget nunc scelerisque viverra mauris in. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Interdum posuere lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam ultrices sagittis orci a scelerisque. Varius quam quisque id diam. Et netus et malesuada fames ac. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Faucibus purus in massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum. Iaculis at erat pellentesque adipiscing. Praesent semper feugiat nibh sed. Amet aliquam id diam maecenas ultricies mi eget. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Proin gravida hendrerit lectus a. Nulla facilisi cras fermentum odio.

Eros in cursus turpis massa tincidunt dui ut. Iaculis nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae justo. Non consectetur a erat nam at lectus urna duis. Senectus et netus et malesuada fames. Elit pellentesque habitant morbi tristique senectus et. Nullam ac tortor vitae purus faucibus. Pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis. Nisi scelerisque eu ultrices vitae auctor eu. Sit amet justo donec enim diam vulputate. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue. Vestibulum mattis ullamcorper velit sed. Egestas diam in arcu cursus. Enim sit amet venenatis urna cursus. Consectetur a erat nam at. Luctus accumsan tortor posuere ac ut consequat.

Lacus sed viverra tellus in hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat blandit aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Quis viverra nibh cras pulvinar mattis nunc. Fringilla ut morbi tincidunt augue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Leo integer malesuada nunc vel. Eu sem integer vitae justo eget magna fermentum iaculis. Gravida quis blandit turpis cursus in hac. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In hac habitasse platea dictumst quisque sagittis purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Commodo sed egestas egestas fringilla phasellus. Donec enim diam vulputate ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cras sed felis eget velit aliquet sagittis id consectetur.

Capital Stack and Investor Returns

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. 

[Capital Stack Graphic]

[Table]

Development Timeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. Ac turpis egestas maecenas pharetra. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Ultricies mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque. Consequat nisl vel pretium lectus quam id leo. Ridiculus mus mauris vitae ultricies leo. Mauris in aliquam sem fringilla ut morbi.

Expenses and Fees

[Table]

Site Plan

[Project Blueprint]

`,
      sponsor: `Sponsor

  Overview
  
  [Sponsor Name] was formed by [Team Member #1], [Team Member #2], and [Team Member #3], who teamed up in [year] to develop [wind/solar/battery/infrastructure] in the [region] area, a market they believed was underserved. Prior to [year] , [fake story about what they did in business before]. Since then, [Sponsor Name] and its affiliated entities have formed joint ventures with prominent publicly traded [companies], institutional private equity groups and family offices to become one of the most prolific developers of [wind/solar/battery/infrastructure] in [region]. Currently, the Sponsor is increasing the size of its [region] portfolio.
  
  Since [year], the Sponsor and its affiliates have completed the construction and development of [number] sites in [region], of which two sites have since been sold to a national publicly-traded REIT. SNL and its affiliates currently own ten operating self-storage facilities in New York City, totaling approximately [number/MwH] of renewable energy. Each of the facilities was sourced, developed and constructed by the [Sponsor]. These facilities are located at:
  
  [list of operational projects]
  
  Additionally, the Sponsor and its affiliates are expecting to complete in 2021, the development of [number] additional projects aggregating approximately [number/MwH], and have another [number] additional projects either under construction or in its development pipeline. The Sponsor expects that at the end of 2021, it and its affiliates will have approximately [number/MwH] of energy production under management.
  
  
  Leadership Team
  
  Team Member #1
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #2
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #3
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
      `,
      disclaimer: `
      Disclaimer

The content on this detail page was produced by the Sponsor or an affiliate thereof. The Sponsor is under no obligation to update this detail page. None of the opinions expressed on this detail page are the opinions of Envest and they are not endorsed by Envest. Assumptions and projections included in this detail page are not reflective of the position of Envest or any other person or entity other than [Sponsor Name], a Delaware limited liability company (the “Issuer”) or its affiliates.
The preceding summary of principal terms of the offering is qualified in its entirety by reference to the more complete information about the offering contained in the offering documents, including, without limitation, the Confidential Private Placement Memorandum of the Issuer dated February 2021, the Amended and Restated Operating Agreement of the Issuer, Subscription Agreement for Class B Units of the Issuer, and all exhibits and other documents attached thereto or referenced therein (collectively, the "Investment Documents"). This summary is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment. In the event of an inconsistency between the preceding summary and the Investment Documents, investors should rely on the content of the Investment Documents.
There can be no assurance that the methodology used for calculating targeted IRR is appropriate or adequate. Target IRR is presented solely for the purpose of providing insight into the Issuer’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Issuer’s performance. Targeted IRR is not a predictor, projection or guarantee of future performance. There can be no assurance that the Issuer’s targets will be met or that the Issuer will be successful in identifying and investing in investment opportunities that would allow the Issuer to meet these return parameters. Target returns should not be used as a primary basis for an investor’s decision to invest in the Issuer. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.
All forward–looking statements attributable to the Sponsor or persons acting on its behalf apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in this summary and the Investment Documents. Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward–looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events. Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.
The interests in the Issuer will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon exemptions contained in Rule 506(c) of Regulation D as promulgated under the Securities Act. In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration. Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
All investing activities risk the loss of capital. There can be no assurance that investors will not suffer significant losses. No guarantee or representation is made that investment objectives of the Issuer will be achieved. You should not subscribe to purchase interests in the Issuer unless you can readily bear the consequences of such loss.
Interests in the Issuer are listed on the Envest Marketplace. Envest receives fees from the Sponsor or the investment vehicle partially based on the number of investor rooms created. This arrangement could create a conflict of interest between CrowdStreet and investors.
Certain Envest employees may have an interest in, or family members or close friends of Envest employees may have an interest in, or employment or other relationship with, the Issuer or one of its affiliates. Although Envest has a thorough screening process with respect to each investment opportunity, the fact that Envest employees may have an interest in, or may have family members or close friends with an interest in, or employment or other relationship with, the Issuer or one of its affiliates could create an incentive for Envest to approve the Issuer for the Marketplace.
`,
    },
    images: {
      get large() {return this.card},
      card: getImgPath(`e3xternal-content.duckduckgo.com.jpg`),
    },
  },
  {
    id: 8,
    sponsor: 'NP Fuel',
    title: 'Biomass converter in New Jersey 8',
    get slug() {return slugify(this.title)},
    get sponsorSlug() {return slugify(this.sponsor)},
    metrics: {
      energyOutputKWh: 89,
      capacityKWh: 89,
      ppaTerm: 0,
      ppaPriceUSD: 434,
    },
    financials: {
      otherClass: 'Mezzanine Debt Project Finance',
      instrument: 'debt',
      investmentClass: 'Subordinate Debt',
      expectedReturn: 33930000,
      fundTarget: 33330000,
      amtFunded: 33130000,
      principalOutstanding: 0.00941,
      interestAccrued: 0.0124,
      ppaCounterparty: 'counterparty 7',
      annualInterest: '0.097',
      term: {
        length: 4*365*24*60*60*1000,
        get startDt() {return 1612291996043 || this.dt.financials.term.stopDt - this.dt.financials.term.length},
        get stopDt() {return this.dt.financials.term.startDt + this.dt.financials.term.length},
      },
    },
    documents: {
      shareHoldersAgreement: `shareholdersAgreement.pdf`,
      arr: [
        {title: `Shareholder's Agreement` , filePath: 'shareholder-agreement.pdf' , type: 'doctype1'},
        {title: `Power Purhcase Agreement`, filePath: 'ppa.pdf'                   , type: 'doctype2'},
        {title: `Land Lease`              , filePath: 'land-lease.pdf'            , type: 'doctype3'},
        {title: `Connection Agreement`    , filePath: 'connection-agreement.pdf'  , type: 'doctype4'},
      ],
    },
    dtListed: 1621691996043,
    get dtInvestmentTermStart() {return this.dtListed + 1.1*24*60*60*1000},
    get dtInvestmentTermEnd() {return this.dtListed + 90*24*60*60*1000},
    location: {
      coordinates: {lat: 7.1010101, lon: 4.1049293},
      address: {
        country: 'USA',
        stateProvince: 'NJ',
        city: 'Patterson',
        street: 'Main St.',
        buildingNumber: '8',
        apartment: '',
      },
    },
    content: {
      about: `\tInvest indirectly in a mezzanine loan secured by a 11 MwH wind farm in Buffalo, New York. This is a project finance opportunity which is expected to be commercially operational in four years. The minimum investment amount is $15,000.`,
      investment: `Investment

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi bibendum neque egestas congue quisque egestas diam. Erat nam at lectus urna duis convallis convallis tellus. Augue interdum velit euismod in pellentesque massa. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Enim ut tellus elementum sagittis vitae. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Gravida arcu ac tortor dignissim convallis aenean. Vestibulum sed arcu non odio euismod lacinia at. Arcu ac tortor dignissim convallis aenean et tortor. Ultrices in iaculis nunc sed augue. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lectus quam id leo in vitae turpis. Enim sed faucibus turpis in eu mi bibendum neque egestas. Orci dapibus ultrices in iaculis nunc sed. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Et tortor at risus viverra adipiscing at. Fames ac turpis egestas maecenas pharetra convallis. Viverra mauris in aliquam sem fringilla ut morbi tincidunt.

Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nisi porta lorem mollis aliquam. Consectetur a erat nam at lectus urna. Sit amet purus gravida quis blandit turpis. Leo a diam sollicitudin tempor id eu nisl nunc. Nulla facilisi etiam dignissim diam quis enim. Ut diam quam nulla porttitor massa id neque aliquam. Augue mauris augue neque gravida in fermentum et sollicitudin. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Congue quisque egestas diam in arcu cursus euismod quis viverra. Nunc id cursus metus aliquam.

Project

Habitasse platea dictumst quisque sagittis. Eu lobortis elementum nibh tellus molestie nunc. Dictum fusce ut placerat orci nulla pellentesque. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Integer vitae justo eget magna. Id diam maecenas ultricies mi eget mauris. Ut diam quam nulla porttitor. Euismod lacinia at quis risus sed vulputate odio ut enim. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Morbi blandit cursus risus at. Egestas dui id ornare arcu odio ut.

Business Plan

Orci a scelerisque purus semper eget duis at. Malesuada bibendum arcu vitae elementum curabitur vitae. Urna cursus eget nunc scelerisque viverra mauris in. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Interdum posuere lorem ipsum dolor sit amet consectetur. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Aliquam ultrices sagittis orci a scelerisque. Varius quam quisque id diam. Et netus et malesuada fames ac. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Faucibus purus in massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus rutrum. Iaculis at erat pellentesque adipiscing. Praesent semper feugiat nibh sed. Amet aliquam id diam maecenas ultricies mi eget. Eget nunc lobortis mattis aliquam faucibus purus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Proin gravida hendrerit lectus a. Nulla facilisi cras fermentum odio.

Eros in cursus turpis massa tincidunt dui ut. Iaculis nunc sed augue lacus viverra. Sed velit dignissim sodales ut eu sem integer vitae justo. Non consectetur a erat nam at lectus urna duis. Senectus et netus et malesuada fames. Elit pellentesque habitant morbi tristique senectus et. Nullam ac tortor vitae purus faucibus. Pellentesque habitant morbi tristique senectus et netus. Proin sagittis nisl rhoncus mattis. Nisi scelerisque eu ultrices vitae auctor eu. Sit amet justo donec enim diam vulputate. Mauris cursus mattis molestie a iaculis at erat pellentesque. Sem integer vitae justo eget magna. Vehicula ipsum a arcu cursus vitae congue. Vestibulum mattis ullamcorper velit sed. Egestas diam in arcu cursus. Enim sit amet venenatis urna cursus. Consectetur a erat nam at. Luctus accumsan tortor posuere ac ut consequat.

Lacus sed viverra tellus in hac habitasse platea dictumst. Enim blandit volutpat maecenas volutpat blandit aliquam. Nunc consequat interdum varius sit amet mattis vulputate enim. Quis viverra nibh cras pulvinar mattis nunc. Fringilla ut morbi tincidunt augue. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Leo integer malesuada nunc vel. Eu sem integer vitae justo eget magna fermentum iaculis. Gravida quis blandit turpis cursus in hac. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. In hac habitasse platea dictumst quisque sagittis purus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Commodo sed egestas egestas fringilla phasellus. Donec enim diam vulputate ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Cras sed felis eget velit aliquet sagittis id consectetur.

Capital Stack and Investor Returns

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. 

[Capital Stack Graphic]

[Table]

Development Timeline

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed. Ullamcorper eget nulla facilisi etiam. Ac turpis egestas maecenas pharetra. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Ultricies mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque. Consequat nisl vel pretium lectus quam id leo. Ridiculus mus mauris vitae ultricies leo. Mauris in aliquam sem fringilla ut morbi.

Expenses and Fees

[Table]

Site Plan

[Project Blueprint]

`,
      sponsor: `Sponsor

  Overview
  
  [Sponsor Name] was formed by [Team Member #1], [Team Member #2], and [Team Member #3], who teamed up in [year] to develop [wind/solar/battery/infrastructure] in the [region] area, a market they believed was underserved. Prior to [year] , [fake story about what they did in business before]. Since then, [Sponsor Name] and its affiliated entities have formed joint ventures with prominent publicly traded [companies], institutional private equity groups and family offices to become one of the most prolific developers of [wind/solar/battery/infrastructure] in [region]. Currently, the Sponsor is increasing the size of its [region] portfolio.
  
  Since [year], the Sponsor and its affiliates have completed the construction and development of [number] sites in [region], of which two sites have since been sold to a national publicly-traded REIT. SNL and its affiliates currently own ten operating self-storage facilities in New York City, totaling approximately [number/MwH] of renewable energy. Each of the facilities was sourced, developed and constructed by the [Sponsor]. These facilities are located at:
  
  [list of operational projects]
  
  Additionally, the Sponsor and its affiliates are expecting to complete in 2021, the development of [number] additional projects aggregating approximately [number/MwH], and have another [number] additional projects either under construction or in its development pipeline. The Sponsor expects that at the end of 2021, it and its affiliates will have approximately [number/MwH] of energy production under management.
  
  
  Leadership Team
  
  Team Member #1
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #2
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
  
  Team Member #3
  [Name] is a co-founder and CEO of the Sponsor and its affiliates. Previously he was the managing partner of [Name of Other Firm], a multi-strategy investment fund that made debt and equity investments in growth companies, and of [Name of Other Firm], an investment fund that focused on collateralized lending. At his direction, [Name of Other Firm] invested capital in public and private development stage companies, purchased, developed, and sold commercial renewable project and provided term loans and revolving credit facilities collateralized by real assets, marketable securities, machinery and equipment and accounts receivables. 
      `,
      disclaimer: `
      Disclaimer

The content on this detail page was produced by the Sponsor or an affiliate thereof. The Sponsor is under no obligation to update this detail page. None of the opinions expressed on this detail page are the opinions of Envest and they are not endorsed by Envest. Assumptions and projections included in this detail page are not reflective of the position of Envest or any other person or entity other than [Sponsor Name], a Delaware limited liability company (the “Issuer”) or its affiliates.
The preceding summary of principal terms of the offering is qualified in its entirety by reference to the more complete information about the offering contained in the offering documents, including, without limitation, the Confidential Private Placement Memorandum of the Issuer dated February 2021, the Amended and Restated Operating Agreement of the Issuer, Subscription Agreement for Class B Units of the Issuer, and all exhibits and other documents attached thereto or referenced therein (collectively, the "Investment Documents"). This summary is not complete, and each prospective investor should carefully read all of the Investment Documents and any supplements thereto, copies of which are available by clicking the links above or upon request, before deciding whether to make an investment. In the event of an inconsistency between the preceding summary and the Investment Documents, investors should rely on the content of the Investment Documents.
There can be no assurance that the methodology used for calculating targeted IRR is appropriate or adequate. Target IRR is presented solely for the purpose of providing insight into the Issuer’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Issuer’s performance. Targeted IRR is not a predictor, projection or guarantee of future performance. There can be no assurance that the Issuer’s targets will be met or that the Issuer will be successful in identifying and investing in investment opportunities that would allow the Issuer to meet these return parameters. Target returns should not be used as a primary basis for an investor’s decision to invest in the Issuer. Please see the applicable Investment Documents for disclosure relating to forward-looking statements.
All forward–looking statements attributable to the Sponsor or persons acting on its behalf apply only as of the date of the offering and are expressly qualified in their entirety by the cautionary statements included elsewhere in this summary and the Investment Documents. Any financial projections are preliminary and subject to change; the Sponsor undertakes no obligation to update or revise these forward–looking statements to reflect events or circumstances that arise after the date made or to reflect the occurrence of unanticipated events. Inevitably, some assumptions will not materialize, and unanticipated events and circumstances may affect the ultimate financial results. Projections are inherently subject to substantial and numerous uncertainties and to a wide variety of significant business, economic and competitive risks, and the assumptions underlying the projections may be inaccurate in any material respect. Therefore, the actual results achieved may vary significantly from the forecasts, and the variations may be material.
The interests in the Issuer will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon exemptions contained in Rule 506(c) of Regulation D as promulgated under the Securities Act. In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration. Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
All investing activities risk the loss of capital. There can be no assurance that investors will not suffer significant losses. No guarantee or representation is made that investment objectives of the Issuer will be achieved. You should not subscribe to purchase interests in the Issuer unless you can readily bear the consequences of such loss.
Interests in the Issuer are listed on the Envest Marketplace. Envest receives fees from the Sponsor or the investment vehicle partially based on the number of investor rooms created. This arrangement could create a conflict of interest between CrowdStreet and investors.
Certain Envest employees may have an interest in, or family members or close friends of Envest employees may have an interest in, or employment or other relationship with, the Issuer or one of its affiliates. Although Envest has a thorough screening process with respect to each investment opportunity, the fact that Envest employees may have an interest in, or may have family members or close friends with an interest in, or employment or other relationship with, the Issuer or one of its affiliates could create an incentive for Envest to approve the Issuer for the Marketplace.
`,
    },
    images: {
      get large() {return this.card},
      card: getImgPath('1980_schwinn_air_dyne_ergometric_exerciser.png'),
    },
  },
];
