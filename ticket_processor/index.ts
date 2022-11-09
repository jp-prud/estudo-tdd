type Ticket = {
  codeBar: string;
  emittedDate: string;
  paidPrice: number;
  // paymentData?: PaymentData;
};

// type PaymentData = {
//   invoiceId: string;
//   date: string;
//   paymentType: 'BOLETO'
// }

type Invoice = {
  id: string;
  consumerName: string;
  emittedDate: string;
  totalPrice: number;
};

export default class TicketProcessor {
  total: number = 0;
  ticketsList: Array<Ticket> = [];
  invoicesList: Array<Invoice> = [];

  add(ticket: Ticket): void {
    this.ticketsList.push(ticket);
  }

  addInvoice(invoice: Invoice): void {
    this.invoicesList.push(invoice);
  }

  getDiscountGenerated(): number {
    return this.ticketsList.reduce((acc, ticket) => {
      return (acc += ticket.paidPrice);
    }, 0);
  }

  getInvoicesList(): Array<Invoice> {
    return this.invoicesList;
  }
}
