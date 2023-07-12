class Expense {
  public Amount: number
  public Description: string

  constructor(description: string, amount: number) {
    this.Description = description
    this.Amount = amount
  }
}

export default Expense