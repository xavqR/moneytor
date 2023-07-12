import Expense from './Expense'

class DayCalendar {
  public Id: number
  public Date: Date
  public DateName: string
  public Expenses: Array<Expense>

  constructor(id: number, date: Date, dateName: string) {
    this.Id = id
    this.Date = date
    this.DateName = dateName
    this.Expenses = new Array<Expense>()
  }

}

export default DayCalendar