using Microsoft.AspNetCore.Mvc;
using react_user_project.Models;
using react_user_project.Dtos;

namespace react_user_project.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NamesController : ControllerBase
{
    private readonly INamesRepository _name;

    public NamesController(INamesRepository name)
    {
        _name = name;
    }

    [HttpGet]
    public ActionResult Get()
    {
        var name = _name.Get();
        return Ok(name);
    }

    [HttpPost]
    public ActionResult Post(NamesDto name) {
        var result = _name.Add(name.Name);
        return Ok(result);
    }
}
