let things = ["w", "b", "q", "6"];

function do_thing(array)
{
    for(i=0; i<things.length; i++)
    {
        print(things[i] == "w" ? "aaaa" : things[i])
    }
}

do_thing(things);