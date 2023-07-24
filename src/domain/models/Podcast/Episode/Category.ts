export interface Category {
  attributes: CategoryAttributes
}

interface CategoryAttributes {
  "im:id": string
  scheme: string
  term: PurpleLabel
  label: PurpleLabel
}

enum PurpleLabel {
  Music = "Music",
  MusicInterviews = "Music Interviews",
  MusicHistory = "Music History",
  MusicCommentary = "Music Commentary"
}
