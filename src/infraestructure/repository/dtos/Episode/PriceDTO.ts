enum Currency {
  Usd = "USD"
}

enum PriceLabel {
  Get = "Get"
}

export interface PriceDTO {
  attributes: PriceAttributesDTO
  label: PriceLabel
}

interface PriceAttributesDTO {
  amount: string
  currency: Currency
}
