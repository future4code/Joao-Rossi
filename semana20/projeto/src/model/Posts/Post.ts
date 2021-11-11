export type AuthenticationData ={
  id: string,
  type: string
}

export type POST_TYPE = {
  normal: "normal";
  event: "event";
};

export default class Post {
  private id: string;
  private photo: string;
  private description: string;
  private createdAt: string;
  private authorId: string;
  private type: POST_TYPE;

  constructor(
    id: string,
    photo: string,
    description: string,
    createdAt: string,
    authorId: string,
    type: POST_TYPE
  ) {
    this.id = id;
    this.photo = photo;
    this.description = description;
    this.createdAt = createdAt;
    this.authorId = authorId;
    this.type = type;
  }

  getId(): string{
    return this.id;
  }

  getPhoto(): string {
    return this.photo
  }

  getDescription(): string {
    return this.description;
  }

  getCreatedAt(): string {
    return this.createdAt
  }

  getType(): POST_TYPE {
    return this.type
  }

  getTypeAsString(): string {
    return this.type.toString()
  }

  getAuthorId(): string {
    return this.authorId
  }

  static toPost(input: any | null) : Post {
    const {id, photo, description, createdAt, authorId, type} = input; 

    const post = new Post(id, photo, description, createdAt, authorId, type)

    return post || null
  }
}
