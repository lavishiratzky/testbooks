export interface Root {
    kind: string
    totalItems: number
    items: Item[]
  }
  
  export interface Item {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfoModel
    saleInfo: SaleInfoModel
    accessInfo: AccessInfoModel
    searchInfo?: SearchInfoModel
  }
  
  export interface VolumeInfoModel {
    title: string
    subtitle?: string
    authors: string[]
    publishedDate: string
    description?: string
    industryIdentifiers: IndustryIdentifierModel[]
    readingModes: ReadingModesModel
    pageCount: number
    printType: string
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: PanelizationSummaryModel
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
    categories?: string[]
    imageLinks?: ImageLinksModel
    publisher?: string
    averageRating?: number
    ratingsCount?: number
  }
  
  export interface IndustryIdentifierModel {
    type: string
    identifier: string
  }
  
  export interface ReadingModesModel {
    text: boolean
    image: boolean
  }
  
  export interface PanelizationSummaryModel {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
  }
  
  export interface ImageLinksModel {
    smallThumbnail: string
    thumbnail: string
  }
  
  export interface SaleInfoModel {
    country: string
    saleability: string
    isEbook: boolean
  }
  
  export interface AccessInfoModel {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: EpubModel
    pdf: PdfModel
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
  
  export interface EpubModel{
    isAvailable: boolean
    acsTokenLink?: string
  }
  
  export interface PdfModel {
    isAvailable: boolean
    acsTokenLink?: string
  }
  
  export interface SearchInfoModel {
    textSnippet: string
  }
    