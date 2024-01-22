import { Content } from "./content-interface";

export class ContentList {
    private contentArray: Content[];
    constructor() {
        this.contentArray = [];
      }
    
      get Content(): Content[] {
        return this.contentArray;
      }
    
      addContent(contentItem: Content): void {
        this.contentArray.push(contentItem);
      }
    
      numberOfItems(): number {
        return this.contentArray.length;
      }
    
      outputAtIndex(index: number): string {
          const contentItem = this.contentArray[index];
        if (index < 0 || index >= this.contentArray.length) {
          return "Invalid index";
        }
    
        return `
          <div>
            <h2>${contentItem.title}</h2>
            <p>Description: ${contentItem.description}</p>
            <p>Creator: ${contentItem.creator}</p>
            <img src="${contentItem.imgURL}" alt="Image">
            <p>Type: ${contentItem.type}</p>
          </div>
        `;
      }
}