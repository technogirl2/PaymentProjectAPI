using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net.Mime;
using System.Runtime.CompilerServices;
namespace CrudAPi.Models
{

    public class PaymentDetails
    {
        [Key]
        public int PaymentDetailsId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CardOwnerName { get; set; } = "";


        [Column(TypeName = "nvarchar(16)")]

        public string ExpirationDate { get; set; } = "";


        [Column(TypeName = "nvarchar(5)")]

        public string SecurityCode { get; set; } = "";


    }
}