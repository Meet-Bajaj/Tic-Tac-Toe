#include "main.h"
int main()
{
    while (n-- && isActive)
    {
        print_board(board, 9);
        print_();
        cout << endl<< "It's " << currentPlayer << "'s Turn" << endl;
        cout << "Enter Your Place : ";
        cin >> index;
        update(board, currentPlayer, index);
        system("cls"); // Function to Clear the Screen
        check_win(board);
        change();
    }
    getch();
    return 0;
}
