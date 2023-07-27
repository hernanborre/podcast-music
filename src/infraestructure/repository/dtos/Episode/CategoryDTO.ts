export interface CategoryDTO {
  attributes: CategoryAttributesDTO
}

interface CategoryAttributesDTO {
  "im:id": string
  scheme: string
  term: PurpleLabelDTO
  label: PurpleLabelDTO
}

enum PurpleLabelDTO {
  Music = "Music",
  MusicInterviews = "Music Interviews",
  MusicHistory = "Music History",
  MusicCommentary = "Music Commentary"
}
