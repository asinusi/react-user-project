using Microsoft.AspNetCore.Mvc;
using react_user_project.Dtos;

namespace react_user_project.Models;

public interface INamesRepository
{
    NamesDto Get();
    NamesDto Add(string name);
}