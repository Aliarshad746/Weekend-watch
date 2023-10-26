const months = ['Jan', 'Feb', "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getFormattedDate = (date) => {
    if(typeof date !== 'string' || !date){
        return "";
    }

    const [year,month,curr_date] = date.split("-");

    return `${months[month - 1]} ${curr_date}, ${year}`

}