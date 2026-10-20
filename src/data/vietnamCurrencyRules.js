// Unified 3 ways comparison diagram (Pele / Mermaid)
export const threeWaysComparisonDiagram = `flowchart TD
    classDef dumb fill:#fff1f2,stroke:#f43f5e,stroke-width:2px,color:#9f1239;
    classDef smart fill:#f0f9ff,stroke:#0284c7,stroke-width:2px,color:#0369a1;
    classDef smartest fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#15803d;
    classDef step fill:#ffffff,stroke:#cbd5e1,stroke-width:1.5px,color:#0f172a;

    subgraph Dumb["❌ 1. The Dumb Way"]
        D1["Buy VND in India"]:::step --> D2["Indian Forex Dealer / BookMyForex"]:::step --> D3["Lose 15%–20% on exotic spread"]:::dumb
    end

    subgraph Smart["🛡️ 2. The Smart Way"]
        S1["Buy USD in India"]:::step --> S2["Carry USD Notes (~0.5% markup)"]:::step --> S3["Exchange USD in Vietnam"]:::smart
    end

    subgraph Smartest["🏆 3. The Smartest Way"]
        T1["Withdraw VND from Vietnam ATM"]:::step --> T2["Zero-Forex Card + MB/Ocean Bank"]:::step --> T3["0% Fee at Live Interbank Rate"]:::smartest
    end

    D3 -. "Better Alternative" .-> S1
    S3 -. "Best Method" .-> T1`;

export const indiaPrepDiagram = `flowchart TD
    classDef step fill:#ffffff,stroke:#cbd5e1,stroke-width:1.5px,color:#0f172a;
    classDef ready fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#15803d;

    A["1. Zero-Forex Debit Card\n(Visa or Mastercard)"]:::step
    B["2. Mobile Banking App Settings\nEnable International Usage & ATM Withdrawals"]:::step
    C["3. Emergency Cash Cushion\nBuy $200–$500 in physical USD cash notes"]:::step
    D["✈️ Ready to Fly to Vietnam\nRely on Vietnam ATMs, keep USD as safety net"]:::ready

    A --> B
    B --> C
    C --> D`;

export const atmDecisionDiagram = `flowchart TD
    classDef good fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#15803d;
    classDef bad fill:#fff1f2,stroke:#f43f5e,stroke-width:2px,color:#9f1239;
    classDef step fill:#ffffff,stroke:#cbd5e1,stroke-width:1.5px,color:#0f172a;

    Card["Zero-Forex Debit Card\n(Visa or Mastercard)"]:::step
    
    ATM{"Which Vietnam ATM?"}:::step
    
    Best["Ocean Bank or MB Bank"]:::good
    Random["Random Vietnam ATM"]:::bad
    
    ZeroCost["🎉 0% Total Charges\nZero card markup + Zero ATM fee"]:::good
    Surcharge["⚠️ Up to 3% Surcharge\nRandom ATMs add local charges"]:::bad

    Card --> ATM
    ATM -->|"Zero-Forex ATM"| Best
    ATM -->|"Other ATMs"| Random
    Best --> ZeroCost
    Random --> Surcharge`;

export const customsRulesDiagram = `flowchart TD
    classDef good fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#15803d;
    classDef step fill:#ffffff,stroke:#cbd5e1,stroke-width:1.5px,color:#0f172a;

    Return["Leftover Currency After Trip"]:::step
    Split{"Select Currency"}:::step
    
    VND["₫ Vietnamese Dong"]:::step
    VNDLimit["Max ₫15,000,000 (~₹50k)\nwithout customs declaration"]:::good
    VNDDone["Spend at airport or sell at BookMyForex"]:::step
    
    USD["$ US Dollar Cash Notes"]:::step
    USDLimit["Max $2,000 USD legally\nheld under RBI rules"]:::good
    USDDone["Keep safe at home for next trip"]:::step

    Return --> Split
    Split -->|"Leftover Dong"| VND
    VND --> VNDLimit
    VNDLimit --> VNDDone
    Split -->|"Unspent USD"| USD
    USD --> USDLimit
    USDLimit --> USDDone`;
