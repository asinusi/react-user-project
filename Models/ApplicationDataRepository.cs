using Microsoft.AspNetCore.Mvc;

namespace react_user_project.Models;
public class ApplicationDataRepository
{
    private string[] Data { get; set; }

    public ApplicationDataRepository()
    {
        Data = new string[] { "John", "Jane" };
    }
    public string GetRandomItem()
    {
        if (Data.Length == 0)
        {
            return string.Empty;
        }
        var r = new Random();
        var index = r.Next(0, Data.Length);
        return Data[index];
    }
    public void Add(string data)
    {
        Data.Append(data);
    }
}
