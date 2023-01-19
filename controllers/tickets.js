const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  res.render('tickets/new', { title: 'New Ticket', flightId: req.params.flightId });
}

function create(req, res) {
  const ticket = new Ticket({ seat: req.body.seat, price: req.body.price});
  ticket.flight = req.params.flightId;
  ticket.save((err) => {
      if (err) {
          return;
      }
      res.redirect(`/flights/${req.params.flightId}`);
  });
}
   




