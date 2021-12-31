using System.ComponentModel.DataAnnotations;

namespace react_user_project.Dtos;

public class NamesDto
{
    [Required(AllowEmptyStrings = false, ErrorMessage = "Required")]
    [MaxLength(6, ErrorMessage = "MaxLength")]
    [RegularExpression("^[a-zA-Z‘ ]*$", ErrorMessage = "InvalidChars")]
    public string Name { get; set; } = "";
}
