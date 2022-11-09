import TicketProcessor from './';

describe('ticket processor', () => {
  let processor;

  const ticket = {
    codeBar: '1',
    emittedDate: '20/10/2022',
    paidPrice: 100,
  };

  const invoice = {
    id: '123-XPTO',
    consumerName: 'Jhon Doe',
    emittedDate: '20/10/2022',
    totalPrice: 200,
  };

  beforeEach(() => {
    processor = new TicketProcessor();
  });

  it('should return 0 when getTotal() is called', () => {
    expect(processor.getDiscountGenerated()).toEqual(0);
  });

  it('should some discount ticket and receive total amount', () => {
    processor.add(ticket);

    expect(processor.getDiscountGenerated()).toEqual(100);
  });

  it('should that the invoice is added', () => {
    processor.addInvoice(invoice);

    expect(processor.getInvoicesList()).toHaveLength(1);
    expect(processor.getInvoicesList()).toMatchSnapshot();
  });

  it('should that the ticket is associated with invoice', () => {
    processor.associatedTicketWithInvoice({ ticket, invoice });
  });
});
