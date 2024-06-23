#include <bits/stdc++.h>
#include<conio.h>
using namespace std;
bool isActive = true;
    char board[9] = {' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '};
    char currentPlayer = 'X';
    int index;
    int n = 9;
int winCondition[8][3] =
    {
        {0, 1, 2},
        {3, 4, 5},
        {6, 7, 8},
        {0, 3, 6},
        {1, 4, 7},
        {2, 5, 8},
        {0, 4, 8},
        {2, 4, 6}};
void print_board(char *s, int n)
{
    cout << endl;
    for (int i = 0; i < 3; i++)
    {
        cout << s[i] << "\t";
    }
    cout << endl;
    cout << "----   ----   ----";
    cout << endl;
    for (int i = 3; i < 6; i++)
    {
        cout << s[i] << "\t";
    }
    cout << endl;
    cout << "----   ----   ----";
    cout << endl;
    for (int i = 6; i < 9; i++)
    {
        cout << s[i] << "\t";
    }
    cout << endl;
    cout << endl;
}
void print_()
{
    cout << " 1 | 2 | 3" << endl;
    cout << " ---------" << endl;
    cout << " 4 | 5 | 6" << endl;
    cout << " ---------" << endl;
    cout << " 7 | 8 | 9" << endl;
}
void update(char *s, char x0, int n)
{
    if (s[n - 1] == ' ')
    {
        s[n - 1] = x0;
    }
}
void check_win(char *s)
{
    for (int i = 0; i < 8; i++)
    {
        if (s[winCondition[i][0]] == s[winCondition[i][1]] &&
            s[winCondition[i][1]] == s[winCondition[i][2]] &&
            s[winCondition[i][0]] != ' ')
        {
            cout << s[winCondition[i][0]]<<" Wins";
            isActive = false;
            getch();
        }
    }
}
void change(){
    if(currentPlayer == 'X'){
        currentPlayer = 'O';
        }
        else{
            currentPlayer = 'X';
            }
}
