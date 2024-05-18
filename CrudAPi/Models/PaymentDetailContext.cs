using CrudAPi.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudAPi.Models;

public class PaymentDetailContext : DbContext
{
    public PaymentDetailContext(DbContextOptions options) : base(options)
    {



    }

    public DbSet<PaymentDetails> PaymentDetails { get; set; }

}
