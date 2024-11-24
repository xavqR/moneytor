class Expense {
  public Id: number
  public Category: string
  public Description: string
  public Amount: number
  public Date: Date

  constructor(id: number, category: string, description: string, amount: number, date: Date) {
    this.Id = id
    this.Category = category
    this.Description = description
    this.Amount = amount
    this.Date = date
  }
}

export default Expense