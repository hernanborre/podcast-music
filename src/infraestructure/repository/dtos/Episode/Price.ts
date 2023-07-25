enum Currency {
  Usd = "USD"
}

enum PriceLabel {
  Get = "Get"
}

export interface Price {
  attributes: PriceAttributes
  label: PriceLabel
}

interface PriceAttributes {
  amount: string
  currency: Currency
}
